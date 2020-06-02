var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        winHeight: "",
        shareicon: "../../images/rd_b_fx@3x.png",
        topicicon: "../../images/topicicon1.png",
        arrowicon: "../../images/arrow1.png",
        backicon: "../../images/nav_icon_black.png",
        addimgicon: "../../images/addimgicon.png",
        addvideoicon: "../../images/addvideoicon.png",
        topicicon2: "../../images/topicicon2.png",
        uncheckicon1: "../../images/uncheckicon1.png",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        scrollDone: !1,
        currenttab: 0,
        currentTopicid: "",
        chooseImgset: [],
        chooseVideoset: [],
        textarea_val: "",
        canpost: !1,
        checkedTopic: "选择话题",
        checkedTopicid: "",
        imgsetforsubmit: "",
        videosetforsubmit: "",
        videocoverforsubmit: "",
        firstImg: "",
        uploadvideo_process: !1,
        uploadimg_process: !1,
        uploadcoverimg_process: !1,
        posted_flag: !1,
        pageNum: 1
    },
    onShareAppMessage: function(t) {
        return t.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151908_464.jpg",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    addtopic: function() {
        this.setData({
            showtopicbox: !0
        });
    },
    checkthistopic: function(t) {
        var e = t.currentTarget.dataset.topicid, a = t.currentTarget.dataset.topictitle;
        console.log("执行选择话题操作：" + e);
        var o = getCurrentPages();
        o[o.length - 2].setData({
            checkedTopicid: e,
            checkedTopic: a
        }), wx.navigateBack(1);
    },
    onLoad: function(e) {
        this.setData({
            option: e
        });
        var a = this;
        a.setData({
            requeseDone: !0
        }), wx.getSystemInfo({
            success: function(t) {
                var e = t.windowHeight * (750 / t.windowWidth) - 88 - 148;
                console.log(e), a.setData({
                    cHeight: e
                });
            }
        }), wx.request({
            url: t.globalData.newlocalhost + "/Foodshow/foodshow_tab",
            data: {
                format: "json",
                type: 2
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                a.setData({
                    toptabs: t.data.data
                }), console.log("tabs:"), console.log(t), a.setData({
                    currenttab: 0,
                    currentTopicid: t.data.data.item[0].topic_id
                }), a.showtopiclist(t.data.data.item[0].topic_id);
            }
        });
    },
    lower: function() {
        var e = this;
        console.log("加载更多"), wx.request({
            url: t.globalData.newlocalhost + "/topic/list",
            data: {
                format: "json",
                page: parseInt(e.data.pageNum) + 1,
                type: e.data.currentTopicid
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                e.setData({
                    pageNum: parseInt(e.data.pageNum) + 1,
                    topic_list: e.data.topic_list.concat(t.data.data.items)
                });
            }
        });
    },
    showtopiclist: function(e) {
        var a = this, o = e;
        wx.request({
            url: t.globalData.newlocalhost + "/topic/list",
            data: {
                format: "json",
                page: a.data.pageNum,
                type: o
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                a.setData({
                    topic_list: t.data.data.items
                }), console.log("topic_list:"), console.log(a.data.topic_list.items);
            }
        });
    },
    pxToRpx: function(t) {
        return (t = parseInt(t)) * (375 / wx.getSystemInfoSync().windowWidth) * 2;
    },
    rpxTopx: function(t) {
        return (t = parseInt(t)) / 2 * (wx.getSystemInfoSync().windowWidth / 375);
    },
    switchtopic: function(t) {
        var e = this.rpxTopx(168 * t.currentTarget.dataset.index + 101 - 375);
        this.setData({
            tab_scleft: e,
            currenttab: t.currentTarget.dataset.index,
            currentTopicid: t.currentTarget.dataset.id
        }), this.setData({
            currenttab: t.currentTarget.dataset.index,
            currentTopicid: t.currentTarget.dataset.id,
            pageNum: 1
        }), this.showtopiclist(t.currentTarget.dataset.id);
    }
});