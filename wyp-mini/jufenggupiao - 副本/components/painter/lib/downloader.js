Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * LRU 文件存储，使用该 downloader 可以让下载的文件存储在本地，下次进入小程序后可以直接使用
 * 详细设计文档可查看 https://juejin.im/post/5b42d3ede51d4519277b6ce3
 */ var util = require("./util.js");

var SAVED_FILES_KEY = "savedFiles";

var KEY_TOTAL_SIZE = "totalSize";

var KEY_PATH = "path";

var KEY_TIME = "time";

var KEY_SIZE = "size";

// 可存储总共为 6M，目前小程序可允许的最大本地存储为 10M
var MAX_SPACE_IN_B = 6 * 1024 * 1024;

var savedFiles = {};

var Dowloader = function() {
    function Dowloader() {
        _classCallCheck(this, Dowloader);
        // app 如果设置了最大存储空间，则使用 app 中的
                if (getApp().PAINTER_MAX_LRU_SPACE) {
            MAX_SPACE_IN_B = getApp().PAINTER_MAX_LRU_SPACE;
        }
        wx.getStorage({
            key: SAVED_FILES_KEY,
            success: function success(res) {
                if (res.data) {
                    savedFiles = res.data;
                }
            }
        });
    }
    /**
   * 下载文件，会用 lru 方式来缓存文件到本地
   * @param {String} url 文件的 url
   */    _createClass(Dowloader, [ {
        key: "download",
        value: function download(url) {
            return new Promise(function(resolve, reject) {
                if (!(url && util.isValidUrl(url))) {
                    resolve(url);
                    return;
                }
                var file = getFile(url);
                if (file) {
                    // 检查文件是否正常，不正常需要重新下载
                    wx.getSavedFileInfo({
                        filePath: file[KEY_PATH],
                        success: function success(res) {
                            resolve(file[KEY_PATH]);
                        },
                        fail: function fail(error) {
                            console.error("the file is broken, redownload it, " + JSON.stringify(error));
                            downloadFile(url).then(function(path) {
                                resolve(path);
                            }, function() {
                                reject();
                            });
                        }
                    });
                } else {
                    downloadFile(url).then(function(path) {
                        resolve(path);
                    }, function() {
                        reject();
                    });
                }
            });
        }
    } ]);
    return Dowloader;
}();

exports.default = Dowloader;

function downloadFile(url) {
    return new Promise(function(resolve, reject) {
        wx.downloadFile({
            url: url,
            success: function success(res) {
                if (res.statusCode !== 200) {
                    console.error("downloadFile " + url + " failed res.statusCode is not 200");
                    reject();
                    return;
                }
                var tempFilePath = res.tempFilePath;
                wx.getFileInfo({
                    filePath: tempFilePath,
                    success: function success(tmpRes) {
                        var newFileSize = tmpRes.size;
                        doLru(newFileSize).then(function() {
                            saveFile(url, newFileSize, tempFilePath).then(function(filePath) {
                                resolve(filePath);
                            });
                        }, function() {
                            resolve(tempFilePath);
                        });
                    },
                    fail: function fail(error) {
                        // 文件大小信息获取失败，则此文件也不要进行存储
                        console.error("getFileInfo " + res.tempFilePath + " failed, " + JSON.stringify(error));
                        resolve(res.tempFilePath);
                    }
                });
            },
            fail: function fail(error) {
                console.error("downloadFile failed, " + JSON.stringify(error) + " ");
                reject();
            }
        });
    });
}

function saveFile(key, newFileSize, tempFilePath) {
    return new Promise(function(resolve, reject) {
        wx.saveFile({
            tempFilePath: tempFilePath,
            success: function success(fileRes) {
                var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
                savedFiles[key] = {};
                savedFiles[key][KEY_PATH] = fileRes.savedFilePath;
                savedFiles[key][KEY_TIME] = new Date().getTime();
                savedFiles[key][KEY_SIZE] = newFileSize;
                savedFiles["totalSize"] = newFileSize + totalSize;
                wx.setStorage({
                    key: SAVED_FILES_KEY,
                    data: savedFiles
                });
                resolve(fileRes.savedFilePath);
            },
            fail: function fail(error) {
                console.error("saveFile " + key + " failed, then we delete all files, " + JSON.stringify(error));
                // 由于 saveFile 成功后，res.tempFilePath 处的文件会被移除，所以在存储未成功时，我们还是继续使用临时文件
                                resolve(tempFilePath);
                // 如果出现错误，就直接情况本地的所有文件，因为你不知道是不是因为哪次lru的某个文件未删除成功
                                reset();
            }
        });
    });
}

/**
 * 清空所有下载相关内容
 */ function reset() {
    wx.removeStorage({
        key: SAVED_FILES_KEY,
        success: function success() {
            wx.getSavedFileList({
                success: function success(listRes) {
                    removeFiles(listRes.fileList);
                },
                fail: function fail(getError) {
                    console.error("getSavedFileList failed, " + JSON.stringify(getError));
                }
            });
        }
    });
}

function doLru(size) {
    return new Promise(function(resolve, reject) {
        var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
        if (size + totalSize <= MAX_SPACE_IN_B) {
            resolve();
            return;
        }
        // 如果加上新文件后大小超过最大限制，则进行 lru
                var pathsShouldDelete = [];
        // 按照最后一次的访问时间，从小到大排序
                var allFiles = JSON.parse(JSON.stringify(savedFiles));
        delete allFiles[KEY_TOTAL_SIZE];
        var sortedKeys = Object.keys(allFiles).sort(function(a, b) {
            return allFiles[a][KEY_TIME] - allFiles[b][KEY_TIME];
        });
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            for (var _iterator = sortedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var sortedKey = _step.value;
                totalSize -= savedFiles[sortedKey].size;
                pathsShouldDelete.push(savedFiles[sortedKey][KEY_PATH]);
                delete savedFiles[sortedKey];
                if (totalSize + size < MAX_SPACE_IN_B) {
                    break;
                }
            }
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
        savedFiles["totalSize"] = totalSize;
        wx.setStorage({
            key: SAVED_FILES_KEY,
            data: savedFiles,
            success: function success() {
                // 保证 storage 中不会存在不存在的文件数据
                if (pathsShouldDelete.length > 0) {
                    removeFiles(pathsShouldDelete);
                }
                resolve();
            },
            fail: function fail(error) {
                console.error("doLru setStorage failed, " + JSON.stringify(error));
                reject();
            }
        });
    });
}

function removeFiles(pathsShouldDelete) {
    var _loop = function _loop(pathDel) {
        var delPath = pathDel;
        if ((typeof pathDel === "undefined" ? "undefined" : _typeof(pathDel)) === "object") {
            delPath = pathDel.filePath;
        }
        wx.removeSavedFile({
            filePath: delPath,
            fail: function fail(error) {
                console.error("removeSavedFile " + pathDel + " failed, " + JSON.stringify(error));
            }
        });
    };
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
    try {
        for (var _iterator2 = pathsShouldDelete[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var pathDel = _step2.value;
            _loop(pathDel);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

function getFile(key) {
    if (!savedFiles[key]) {
        return;
    }
    savedFiles[key]["time"] = new Date().getTime();
    wx.setStorage({
        key: SAVED_FILES_KEY,
        data: savedFiles
    });
    return savedFiles[key];
}