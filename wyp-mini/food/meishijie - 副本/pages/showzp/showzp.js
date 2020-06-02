var o = getApp();

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
        checkedRecipe: "关联菜谱",
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
    onShareAppMessage: function(o) {
        return o.from, {
            title: "让你不再纠结每日三餐吃什么",
            path: "/pages/index/index?goSancan=1",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151823_857.jpg",
            success: function(o) {},
            fail: function(o) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    removerecipe: function() {
        this.setData({
            checkedRecipeid: "",
            checkedRecipe: "关联菜谱"
        });
    },
    inputing: function(o) {
        var e = o.detail.value;
        console.log(e), this.setData({
            textarea_val: e
        }), this.checksubmitstate();
    },
    myTrim: function(o) {
        return o.replace(/^\s+|\s+$/gm, "");
    },
    checksubmitstate: function() {
        var o = this, e = this.myTrim(this.data.textarea_val), t = (this.data.chooseVideoset, 
        this.data.chooseImgset);
        "" != e && t.length > 0 ? o.setData({
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
            success: function(e) {
                var t = e.tempFilePaths;
                console.log(t), console.log("要测这个："), console.log(t), o.setData({
                    chooseImgset: o.data.chooseImgset.concat(t)
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
            success: function(e) {
                var t = e.tempFilePath;
                console.log(e), o.setData({
                    chooseVideoset: o.data.chooseVideoset.concat(t)
                }), console.log("videoset:"), console.log(o.data.chooseVideoset), e.thumbTempFilePath && o.setData({
                    video_coverimg: e.thumbTempFilePath
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
        var e = this, t = o.currentTarget.dataset.topicid, a = o.currentTarget.dataset.topictitle;
        console.log("执行选择话题操作：" + t), e.setData({
            showtopicbox: !1,
            checkedTopicid: t,
            checkedTopic: a
        });
    },
    shuttopicbox: function() {
        this.setData({
            showtopicbox: !1
        });
    },
    removeImg: function(o) {
        var e = this, t = o.currentTarget.dataset.index;
        console.log(t);
        var a = e.data.chooseImgset;
        a.splice(t, 1), console.log(a), e.setData({
            chooseImgset: a
        }), e.checksubmitstate();
    },
    removeVideo: function(o) {
        var e = this, t = o.currentTarget.dataset.index;
        console.log(t);
        var a = e.data.chooseVideoset;
        a.splice(t, 1), console.log(a), e.setData({
            chooseVideoset: a
        }), e.checksubmitstate();
    },
    onLoad: function(e) {
        this.setData({
            option: e
        });
        var t = this;
        t.setData({
            requeseDone: !0
        }), wx.getSystemInfo({
            success: function(o) {
                var e = o.windowHeight * (750 / o.windowWidth) - 88 - 148;
                console.log(e), t.setData({
                    cHeight: e
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
                t.setData({
                    toptabs: o.data.data
                }), console.log("tabs:"), console.log(o), t.setData({
                    currenttab: 0,
                    currentTopicid: o.data.data.item[0].topic_id
                }), t.showtopiclist();
            }
        });
    },
    lower: function() {
        var e = this;
        console.log("加载更多"), wx.request({
            url: o.globalData.newlocalhost + "/topic/list",
            data: {
                format: "json",
                page: parseInt(e.data.pageNum) + 1,
                type: e.data.currentTopicid
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                e.setData({
                    pageNum: parseInt(e.data.pageNum) + 1,
                    topic_list: e.data.topic_list.concat(o.data.data.items)
                });
            }
        });
    },
    showtopiclist: function(e) {
        var t = this, a = e;
        wx.request({
            url: o.globalData.newlocalhost + "/topic/list",
            data: {
                format: "json",
                page: t.data.pageNum,
                type: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                t.setData({
                    topic_list: o.data.data.items
                }), console.log("topic_list:"), console.log(t.data.topic_list.items);
            }
        });
    },
    switchtopic: function(o) {
        var e = 168 * o.currentTarget.dataset.index + 101 - 375 + "rpx";
        this.setData({
            tab_scleft: e,
            currenttab: o.currentTarget.dataset.index,
            currentTopicid: o.currentTarget.dataset.id
        }), this.setData({
            currenttab: o.currentTarget.dataset.index,
            currentTopicid: o.currentTarget.dataset.id,
            pageNum: 1
        }), this.showtopiclist(o.currentTarget.dataset.id);
    },
    postZp: function() {
        var e = this;
        if (e.setData({
            requeseDone: !1
        }), 0 == e.data.chooseVideoset.length) console.log("novideo"), e.setData({
            uploadcoverimg_process: !0,
            uploadvideo_process: !0
        }), e.data.uploadimg_process && !e.data.posted_flag && e.postZp_real(); else {
            for (t in e.data.chooseVideoset) wx.uploadFile({
                url: o.globalData.newlocalhost + "/Upload/video",
                filePath: e.data.chooseVideoset[t],
                name: "video_0",
                formData: {
                    format: "json"
                },
                success: function(o) {
                    var t = o.data;
                    console.log("視頻：");
                    var a = JSON.parse(t);
                    console.log(a.data.filename), e.setData({
                        videosetforsubmit: a.data.filename,
                        uploadvideo_process: !0
                    }), console.log(e.data.uploadvideo_process), console.log(e.data.uploadimg_process), 
                    console.log(!e.data.posted_flag), e.data.uploadimg_process && e.data.uploadcoverimg_process && !e.data.posted_flag && e.postZp_real();
                },
                fail: function() {
                    setTimeout(function() {
                        e.repost();
                    }, 5e3);
                }
            }), console.log("开始上传图片"), "" == e.data.video_coverimg || void 0 == e.data.video_coverimg ? e.setData({
                uploadcoverimg_process: !0
            }) : wx.uploadFile({
                url: o.globalData.localhost + "/v9/cook_my_img_upload_new.php",
                filePath: e.data.video_coverimg,
                name: "img_0",
                formData: {
                    format: "json",
                    user_id: o.globalData.userId
                },
                success: function(o) {
                    console.log("上传图片成功");
                    var t = o.data, a = JSON.parse(t);
                    e.setData({
                        videocoverforsubmit: a.imgs_news.img_0,
                        uploadcoverimg_process: !0
                    }), console.log(e.data.uploadvideo_process), console.log(e.data.uploadimg_process), 
                    console.log(!e.data.posted_flag), e.data.uploadvideo_process && e.data.uploadimg_process && !e.data.posted_flag && e.postZp_real();
                },
                fail: function() {
                    console.log("上传图片出错"), setTimeout(function() {
                        e.repost();
                    }, 5e3);
                }
            });
        }
        if (0 == e.data.chooseImgset.length) console.log("noimg"), e.setData({
            uploadimg_process: !0
        }), e.data.uploadcoverimg_process && e.data.uploadvideo_process && !e.data.posted_flag && e.postZp_real(); else {
            var t, a = 0;
            for (t in e.data.chooseImgset) wx.uploadFile({
                url: o.globalData.localhost + "/v9/cook_my_img_upload_new.php",
                filePath: e.data.chooseImgset[t],
                name: "img_0",
                formData: {
                    format: "json",
                    user_id: o.globalData.userId
                },
                success: function(o) {
                    var t = o.data, s = JSON.parse(t);
                    console.log("data1"), console.log(s), a++, e.setData({
                        imgsetforsubmit: e.data.imgsetforsubmit + s.imgs_news.img_0 + ","
                    }), console.log("i=" + a), 1 == a && e.setData({
                        firstImg: s.imgs_news.img_0
                    }), a == e.data.chooseImgset.length && (console.log("imgset_string:"), console.log(e.data.imgsetforsubmit), 
                    e.setData({
                        uploadimg_process: !0
                    }), console.log(e.data.uploadvideo_process), console.log(e.data.uploadcoverimg_process), 
                    console.log(!e.data.posted_flag), e.data.uploadvideo_process && e.data.uploadcoverimg_process && !e.data.posted_flag && e.postZp_real());
                },
                fail: function() {
                    setTimeout(function() {
                        e.repost();
                    }, 5e3);
                }
            });
        }
    },
    postZp_real: function() {
        var e = this;
        e.setData({
            posted_flag: !0
        }), console.log("开始提交"), wx.request({
            url: o.globalData.newlocalhost + "/foodbask/index",
            data: {
                source: "微信小程序",
                format: "json",
                token: o.globalData.token,
                content: e.data.textarea_val,
                recipe_id: e.data.checkedRecipeid || "",
                huodong_ids: "",
                topic_ids: e.data.checkedTopicid,
                imgs: e.data.imgsetforsubmit,
                video: e.data.videosetforsubmit,
                photo: e.data.videocoverforsubmit || e.data.firstImg
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                console.log("提交成功："), console.log(o), e.setData({
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
                    e.repost();
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