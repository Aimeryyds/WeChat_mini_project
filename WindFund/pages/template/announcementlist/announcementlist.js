var e = getApp();

Component({
    properties: {
        refresh: {
            type: Number,
            value: 0,
            observer: function(e, t) {
                console.log(e), console.log(this.data), t == e || this.data.loadingmore.isover || this.getAnnouncements();
            }
        }
    },
    data: {
        loadingmore: {},
        announcementindex: 0,
        tabindex: 0,
        pageNo: 0,
        pageSize: 20,
        annoSizeLimit: 100
    },
    created: function() {
        this.getAnnouncements();
    },
    attached: function() {},
    methods: {
        downloadattechment: function(e, t) {
            this.setData({
                progress: 0
            }), console.log(e.attechmentUrl);
            var n = wx.downloadFile({
                url: e.attechmentUrl.replace("http://snap", "https://news"),
                success: function(e) {
                    if (console.log(e), 200 === e.statusCode) {
                        var n = e.tempFilePath;
                        wx.openDocument({
                            filePath: n,
                            success: function(e) {
                                !t && wx.hideLoading();
                            }
                        });
                    }
                },
                fail: function(e) {
                    console.log("downloadFile fail:"), console.log(e);
                }
            }), a = this;
            t && (this.setData({
                showProgress: !0
            }), n.onProgressUpdate(function(e) {
                a.setData({
                    progress: e.progress,
                    showProgress: e.progress < 100
                });
            }));
        },
        chekcAnnouncementSize: function(e) {
            console.log(e);
            var t = e.split(".");
            return 2 == t.length && parseFloat(t[0]) > this.data.annoSizeLimit;
        },
        dealAnnoByYear: function(e) {
            for (var t = {}, n = void 0, a = [], o = 0; o < e.length; o++) t[n = new Date(e[o].publishTime).formart("yyyy")] ? t[n].push(e[o]) : (t[n] = [], 
            t[n].push(e[o]));
            for (var i in t) a.unshift({
                year: i,
                list: t[i]
            });
            return a;
        },
        announcementTap: function(e) {
            var t = e.currentTarget.dataset.index, n = this, a = this.data.announcements[t];
            this.chekcAnnouncementSize(a.size) ? wx.getNetworkType({
                success: function(e) {
                    "wifi" == e.networkType ? n.downloadattechment(a, !0) : wx.showModal({
                        content: "即将使用移动流量下载公告正文（" + a.size + "），是否继续？",
                        cancelText: "取消",
                        confirmText: "确认",
                        success: function(e) {
                            e.confirm ? n.downloadattechment(a, !0) : e.cancel && console.log("cancel");
                        }
                    });
                },
                fail: function() {}
            }) : (wx.showLoading({
                title: "加载中"
            }), this.downloadattechment(a));
        },
        switchAnnouncementType: function(e) {
            var t = e.currentTarget.dataset.index;
            this.setData({
                announcementindex: t,
                pageNo: 0
            }), this.getAnnouncements();
        },
        getAnnouncements: function() {
            if (!this.data.loadingmore.isloading) {
                this.properties.fundCode;
                var t = [ "all", "issue", "interval", "other" ], n = {
                    userid: e.globalData.userId,
                    pageNo: this.data.pageNo,
                    pageSize: this.data.pageSize,
                    beginDate: "1901-01-01",
                    endDate: new Date().formart("yyyy-MM-dd"),
                    annType: t[this.data.announcementindex]
                }, a = this;
                this.setData({
                    "loadingmore.isloading": !0
                }), e.getData("XCX_OCEAN_ANNOUNCE_FAVOR", n, function(e) {
                    var t = void 0;
                    e.dataList.forEach(function(e) {
                        t = e.publishTime ? new Date(e.publishTime).formart("MM-dd") : new Date(e.date).formart("MM-dd"), 
                        e.publistdate = t;
                    });
                    var n = a.data.announcements;
                    n = a.data.pageNo > 0 ? n.concat(e.dataList) : e.dataList, a.setData({
                        isLoadAnnouncements: !0,
                        announcements: n,
                        annolist: a.dealAnnoByYear(n),
                        pageNo: a.data.pageNo + 1,
                        "loadingmore.isover": e.dataList.length < a.data.pageSize,
                        "loadingmore.showmore": !0,
                        "loadingmore.isloading": !1
                    });
                }, function(e) {}, 1);
            }
        }
    }
});