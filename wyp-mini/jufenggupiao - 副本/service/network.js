Object.defineProperty(exports, "__esModule", {
    value: true
});

// 下载事件
var downloadTask;

// 下载开始时间
var start;

// 下载结束时间 
var end;

// 重复下载
var networkTimeOut;

// 当前是否有网络连接
var networkConnected;

var networkSpeed = {
    // 开始
    startNetwork: function startNetwork(options) {
        this.network();
        wx.getNetworkType({
            success: function success(res) {
                // 返回网络类型, 有效值：
                // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
                console.log("返回网络类型, 有效值：", res);
                if (res.networkType != "none") {
                    // 当前是否有网络连接
                    networkConnected = true;
                }
            }
        });
        wx.onNetworkStatusChange(function(res) {
            console.log("当前是否有网络连接", res.isConnected);
            console.log(res.networkType);
            // 当前是否有网络连接
                        networkConnected = res.isConnected;
        });
    },
    // 下载
    network: function network(options) {
        console.log("开始下载");
        var self = this;
        start = new Date().getTime();
        if (!networkConnected) {
            self.networkCallback({
                networkType: 3,
                networkContent: "没有网络，请检查网络连接"
            });
            networkTimeOut = setTimeout(function() {
                self.network();
            }, 1e3);
            return;
        }
        downloadTask = wx.downloadFile({
            url: "jugupiao/images/service/pers.png",
            // oss上的执笔投顾团队图片,大小为122kb
            success: function success(res) {
                end = new Date().getTime();
                // 根据下载文件大小来确定数值，我下载的内容大概700B
                                if (end - start > 200) {
                    console.log("网络差");
                    self.networkCallback({
                        networkType: 0,
                        networkContent: "网络较差"
                    });
                } else if (end - start > 100) {
                    console.log("网络一般");
                    self.networkCallback({
                        networkType: 1,
                        networkContent: "网络一般"
                    });
                } else {
                    console.log("网络好");
                    self.networkCallback({
                        networkType: 2,
                        networkContent: "网络良好"
                    });
                }
                networkTimeOut = setTimeout(function() {
                    self.network();
                }, 1e3);
            },
            fail: function fail(res) {
                console.log("网络差");
                self.networkCallback({
                    networkType: 0,
                    networkContent: "网络较差"
                });
                networkTimeOut = setTimeout(function() {
                    self.network();
                }, 1e3);
            }
        });
        // 监听downloadFile进度
                downloadTask.onProgressUpdate(function(res) {
            // console.log('下载进度', res.progress)
            // console.log('已经下载的数据长度', res.totalBytesWritten)
            // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
            if (res.progress < 100) {
                end = new Date().getTime();
                if (end - start > 200) {
                    console.log("网络差");
                    self.networkCallback({
                        networkType: 0,
                        networkContent: "网络较差"
                    });
                }
            }
        });
    },
    // 关闭
    stopNetwork: function stopNetwork(options) {
        console.log("关闭网络测速");
        clearTimeout(networkTimeOut);
        downloadTask.abort();
    },
    /**
   * 网络状态回调
   * @param {options} 
   *   networkType	Number	是 0:网络较差 网络一般 2:网络良好 3:网络断开
   *   networkContent  String  是 网络状态文案
   */
    networkCallback: function networkCallback(options) {}
};

/**
 * 作者： 旸君颜
 * 来源： CSDN
 * 原文： https: //blog.csdn.net/yyjjyysleep/article/details/81318901
 */ exports.networkSpeed = networkSpeed;