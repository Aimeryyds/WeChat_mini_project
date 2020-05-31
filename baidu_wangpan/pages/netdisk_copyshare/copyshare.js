function t() {
    var t = this;
    this.XList && (wx.setPageData("copyShare", function(e) {
        return t.XList.reloadList();
    }), wx.setPageData("copyShare", this.currentPath));
}

var e = getApp();

Page({
    data: {
        height: 80,
        pathList: [],
        listLen: 0,
        targetFolder: "",
        step: 1,
        isCopyFilePage: !0,
        isCopying: !1,
        showCancel: !0,
        isTrans: !1,
        saveList: [],
        currentPath: ""
    },
    onReady: function() {
        this.pageType = "copyShare", this.XList = this.selectComponent("#XList"), this.dialog = this.selectComponent("#folderDialog"), 
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.XList.initCurrentPage(this), this.refreshXList(), t.call(this);
    },
    onLoad: function(t) {
        var s = this, a = t.path, i = void 0 === a ? "/" : a, o = t.isShare, n = t.isRoot, h = t.fid, r = t.serverFilename, c = t.fileMeta, l = t.from, p = void 0 === l ? "" : l, g = t.saveList;
        this.from = p, this.currentPath = decodeURIComponent(i);
        var u = this.currentPath.split("/"), f = u.length;
        if (this.toast = this.selectComponent("#toast"), "trans" === p) {
            try {
                g = JSON.parse(g);
            } catch (t) {
                console.error(t), wx.wetoast({
                    content: "参数错误，请稍后重试",
                    duration: 3e3
                }), setTimeout(function() {
                    s.goToBack();
                }, 3e3);
            }
            this.setData({
                isTrans: !0,
                saveList: g,
                currentPath: this.currentPath
            });
        } else {
            this.copyButton = this.selectComponent("#copyButton");
            var d = e.globalData.preShareData.copyList;
            this.copyButton.reSetData({
                pathList: d,
                from: p,
                pathParams: {
                    isShare: o,
                    isRoot: n,
                    fid: h,
                    serverFilename: r,
                    fileMeta: c
                },
                currentPath: this.currentPath,
                count: d.length,
                times: 3,
                delaytime: 2e3
            }), this.setData({
                pathList: d,
                listLen: d.length
            });
        }
        i = u[f - 1];
        var L = e.globalData.systemInfo.visualHeightRpx - 230, y = getCurrentPages().length || 0;
        this.setData({
            height: e.globalData.navHeight,
            boxHeight: L,
            targetFolder: i || "我的网盘",
            step: i ? f : 1,
            showCancel: y > 1
        });
    },
    onShow: function() {
        t.call(this);
    },
    goToBack: function() {
        wx.navigateBack({
            delta: this.data.step
        });
    },
    refreshXList: function() {
        this.XList.loadList(this.currentPath);
    },
    copyStart: function() {
        this.setData({
            isCopying: !0
        });
    },
    copyEnd: function() {
        this.setData({
            isCopying: !1
        });
    }
});