var o = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        winHeight: "",
        shareicon: "../../images/rd_b_fx@3x.png",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        scrollDone: !1,
        chooseImgset: [],
        chooseVideoset: [],
        textarea_val: "",
        canpost: !1,
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
    onShareAppMessage: function(o) {
        return {
            title: "让你不再纠结每日三餐吃什么",
            path: "/pages/index/index?goSancan=1",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151823_857.jpg"
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    inputing: function(o) {
        var t = o.detail.value;
        console.log(t), this.setData({
            textarea_val: t
        }), this.checksubmitstate();
    },
    myTrim: function(o) {
        return o.replace(/^\s+|\s+$/gm, "");
    },
    checksubmitstate: function() {
        var o = this, t = this.myTrim(this.data.textarea_val), e = this.data.chooseVideoset, a = this.data.chooseImgset;
        "" != t && (e.length > 0 || a.length > 0) ? o.setData({
            canpost: !0
        }) : o.setData({
            canpost: !1
        }), console.log("检查提交按钮状态");
    },
    addimg: function() {
        var o = this;
        wx.chooseImage({
            count: 9 - o.data.chooseImgset.length - o.data.chooseVideoset.length,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var e = t.tempFilePaths;
                console.log(e), console.log("要测这个："), console.log(e), o.setData({
                    chooseImgset: o.data.chooseImgset.concat(e)
                }), console.log("imgset:"), console.log(o.data.chooseImgset);
            },
            complete: function() {
                o.checksubmitstate();
            }
        });
    },
    addVideo: function() {
        var o = this;
        wx.chooseVideo({
            sourceType: [ "album", "camera" ],
            maxDuration: 60,
            camera: "back",
            success: function(t) {
                var e = t.tempFilePath;
                console.log(t), o.setData({
                    chooseVideoset: o.data.chooseVideoset.concat(e)
                }), console.log("videoset:"), console.log(o.data.chooseVideoset), t.thumbTempFilePath && o.setData({
                    video_coverimg: t.thumbTempFilePath
                });
            },
            complete: function() {
                o.checksubmitstate();
            }
        });
    },
    addtopic: function() {
        this.setData({
            showtopicbox: !0
        });
    },
    checkthistopic: function(o) {
        var t = this, e = o.currentTarget.dataset.topicid, a = o.currentTarget.dataset.topictitle;
        console.log("执行选择话题操作：" + e), t.setData({
            showtopicbox: !1,
            checkedTopicid: e,
            checkedTopic: a
        });
    },
    shuttopicbox: function() {
        this.setData({
            showtopicbox: !1
        });
    },
    removeImg: function(o) {
        var t = this, e = o.currentTarget.dataset.index;
        console.log(e);
        var a = t.data.chooseImgset;
        a.splice(e, 1), console.log(a), t.setData({
            chooseImgset: a
        }), t.checksubmitstate();
    },
    removeVideo: function(o) {
        var t = this, e = o.currentTarget.dataset.index;
        console.log(e);
        var a = t.data.chooseVideoset;
        a.splice(e, 1), console.log(a), t.setData({
            chooseVideoset: a
        }), t.checksubmitstate();
    },
    onLoad: function(t) {
        this.setData({
            option: t
        });
        var e = this;
        e.setData({
            requeseDone: !0
        }), wx.getSystemInfo({
            success: function(o) {
                var t = o.windowHeight * (750 / o.windowWidth) - 88 - 148;
                console.log(t), e.setData({
                    cHeight: t
                });
            }
        }), wx.request({
            url: o.globalData.newlocalhost + "/Foodshow/foodshow_tab",
            data: {
                format: "json",
                type: 2
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                e.setData({
                    toptabs: o.data.data
                }), console.log("tabs:"), console.log(o), e.setData({
                    currenttab: 0,
                    currentTopicid: o.data.data.item[0].topic_id
                }), e.showtopiclist();
            }
        });
    },
    lower: function() {
        var t = this;
        console.log("加载更多"), wx.request({
            url: o.globalData.newlocalhost + "/topic/list",
            data: {
                format: "json",
                page: parseInt(t.data.pageNum) + 1,
                type: t.data.currentTopicid
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                t.setData({
                    pageNum: parseInt(t.data.pageNum) + 1,
                    topic_list: t.data.topic_list.concat(o.data.data.items)
                });
            }
        });
    },
    showtopiclist: function(t) {
        var e = this, a = t;
        wx.request({
            url: o.globalData.newlocalhost + "/topic/list",
            data: {
                format: "json",
                page: e.data.pageNum,
                type: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                e.setData({
                    topic_list: o.data.data.items
                }), console.log("topic_list:"), console.log(e.data.topic_list.items);
            }
        });
    },
    switchtopic: function(o) {
        var t = 168 * o.currentTarget.dataset.index + 101 - 375 + "rpx";
        this.setData({
            tab_scleft: t,
            currenttab: o.currentTarget.dataset.index,
            currentTopicid: o.currentTarget.dataset.id
        }), this.setData({
            currenttab: o.currentTarget.dataset.index,
            currentTopicid: o.currentTarget.dataset.id,
            pageNum: 1
        }), this.showtopiclist(o.currentTarget.dataset.id);
    },
    postZp: function() {
        var t = this;
        if (t.setData({
            requeseDone: !1
        }), 0 == t.data.chooseVideoset.length) console.log("novideo"), t.setData({
            uploadcoverimg_process: !0,
            uploadvideo_process: !0
        }), t.data.uploadimg_process && !t.data.posted_flag && t.postZp_real(); else {
            for (e in t.data.chooseVideoset) wx.uploadFile({
                url: o.globalData.newlocalhost + "/Upload/video",
                filePath: t.data.chooseVideoset[e],
                name: "video_0",
                formData: {
                    format: "json"
                },
                success: function(o) {
                    var e = o.data;
                    console.log("視頻：");
                    var a = JSON.parse(e);
                    console.log(a.data.filename), t.setData({
                        videosetforsubmit: a.data.filename,
                        uploadvideo_process: !0
                    }), console.log(t.data.uploadvideo_process), console.log(t.data.uploadimg_process), 
                    console.log(!t.data.posted_flag), t.data.uploadimg_process && t.data.uploadcoverimg_process && !t.data.posted_flag && t.postZp_real();
                },
                fail: function() {
                    setTimeout(function() {
                        t.repost();
                    }, 5e3);
                }
            }), console.log("开始上传图片"), "" == t.data.video_coverimg || void 0 == t.data.video_coverimg ? t.setData({
                uploadcoverimg_process: !0
            }) : wx.uploadFile({
                url: o.globalData.localhost + "/v9/cook_my_img_upload_new.php",
                filePath: t.data.video_coverimg,
                name: "img_0",
                formData: {
                    format: "json",
                    user_id: o.globalData.userId
                },
                success: function(o) {
                    console.log("上传图片成功");
                    var e = o.data, a = JSON.parse(e);
                    t.setData({
                        videocoverforsubmit: a.imgs_news.img_0,
                        uploadcoverimg_process: !0
                    }), console.log(t.data.uploadvideo_process), console.log(t.data.uploadimg_process), 
                    console.log(!t.data.posted_flag), t.data.uploadvideo_process && t.data.uploadimg_process && !t.data.posted_flag && t.postZp_real();
                },
                fail: function() {
                    console.log("上传图片出错"), setTimeout(function() {
                        t.repost();
                    }, 5e3);
                }
            });
        }
        if (0 == t.data.chooseImgset.length) console.log("noimg"), t.setData({
            uploadimg_process: !0
        }), t.data.uploadcoverimg_process && t.data.uploadvideo_process && !t.data.posted_flag && t.postZp_real(); else {
            var e, a = 0;
            for (e in t.data.chooseImgset) wx.uploadFile({
                url: o.globalData.localhost + "/v9/cook_my_img_upload_new.php",
                filePath: t.data.chooseImgset[e],
                name: "img_0",
                formData: {
                    format: "json",
                    user_id: o.globalData.userId
                },
                success: function(o) {
                    var e = o.data, s = JSON.parse(e);
                    console.log("data1"), console.log(s), a++, t.setData({
                        imgsetforsubmit: t.data.imgsetforsubmit + s.imgs_news.img_0 + ","
                    }), console.log("i=" + a), 1 == a && t.setData({
                        firstImg: s.imgs_news.img_0
                    }), a == t.data.chooseImgset.length && (console.log("imgset_string:"), console.log(t.data.imgsetforsubmit), 
                    t.setData({
                        uploadimg_process: !0
                    }), console.log(t.data.uploadvideo_process), console.log(t.data.uploadcoverimg_process), 
                    console.log(!t.data.posted_flag), t.data.uploadvideo_process && t.data.uploadcoverimg_process && !t.data.posted_flag && t.postZp_real());
                },
                fail: function() {
                    setTimeout(function() {
                        t.repost();
                    }, 5e3);
                }
            });
        }
    },
    postZp_real: function() {
        var t = this;
        t.setData({
            posted_flag: !0
        }), console.log("开始提交"), wx.request({
            url: o.globalData.newlocalhost + "/foodbask/index",
            data: {
                source: "微信小程序",
                format: "json",
                token: o.globalData.token,
                content: t.data.textarea_val,
                recipe_id: "",
                huodong_ids: "",
                topic_ids: t.data.checkedTopicid,
                imgs: t.data.imgsetforsubmit,
                video: t.data.videosetforsubmit,
                photo: t.data.videocoverforsubmit || t.data.firstImg
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                console.log("提交成功："), console.log(o), t.setData({
                    requeseDone: !0
                }), wx.showToast({
                    title: "发布成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack(1);
                }, 2e3);
            },
            fail: function(o) {
                setTimeout(function() {
                    t.repost();
                }, 5e3);
            }
        });
    },
    repost: function() {
        var o = this;
        console.log("提交失败"), o.setData({
            imgsetforsubmit: "",
            videosetforsubmit: "",
            videocoverforsubmit: "",
            firstImg: "",
            uploadvideo_process: !1,
            uploadimg_process: !1,
            uploadcoverimg_process: !1,
            posted_flag: !1
        }), o.postZp();
    }
});