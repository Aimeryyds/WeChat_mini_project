var app = getApp();

Component({
    /**
   * 组件的属性列表
   */
    properties: {
        vid: {
            type: String,
            value: ""
        },
        siteid: {
            type: String,
            value: ""
        },
        vc: {
            type: String,
            value: ""
        },
        custom_id: {
            type: String,
            value: ""
        }
    },
    /**
   * 组件的初始数据
   */
    data: {
        videoSrcList: [],
        // 获取视频地址列表
        videoSrc: "",
        // 显示的视频地址
        videoPoster: "",
        // 视频封面
        videoControls: false,
        // controls
        isPlaying: false,
        // 是否正在播放
        percent: 0,
        // 进度条
        cPlayBtn: false,
        dragBtnleft: -15,
        // 进度条按钮
        vCurrentTime: 0,
        // video播放时间
        vDuration: 0,
        // video总时间
        second_width: 0,
        // 手机宽度
        uaModel: "iPhone",
        //ua信息，用于接口请求参数
        ccH5TimeCurrent: "00:00",
        ccH5TimeTotal: "00:00",
        btnsShow: true,
        // 界面显示隐藏
        interFaceShow: true,
        // 界面按钮显示隐藏
        ccH5spTxt: "常速",
        spShow: false,
        // 倍速显示隐藏
        hdShow: false,
        // 清晰度显示隐藏
        ccH5hdTxt: "",
        // 清晰度按钮信息
        authenable: null,
        // 授权播放
        freetime: null,
        // 授权播放时间
        authmessage: "",
        // 授权播放提示信息
        isPlayAuth: false,
        // 授权播放界面隐藏
        videoBoxShow: true,
        // video盒子显示
        authCallback: null,
        // 授权播放回调
        authOpen: false,
        custom_id: "",
        spList: [ {
            num: "1.5",
            txt: "1.5倍"
        }, {
            num: "1.25",
            txt: "1.25倍"
        }, {
            num: "1",
            txt: "常速"
        }, {
            num: "0.8",
            txt: "0.8倍"
        } ]
    },
    ready: function ready() {
        this.ccVideo = wx.createVideoContext("ccVideo", this);
        var that = this;
        var vid = this.data.vid;
        var siteid = this.data.siteid;
        var vc = this.data.vc;
        var custom_id = this.data.custom_id;
        var res = wx.getSystemInfoSync();
        var uaModel = "iPhone";
        var lowerCaseModel = res.system.toLowerCase();
        if (lowerCaseModel.startsWith("android")) {
            uaModel = "Android";
        }
        // 计算主体部分高度,单位为px
                that.setData({
            uaModel: uaModel,
            second_width: res.windowWidth
        });
        this.getData(vid, siteid, vc, that.showPlayer);
    },
    /**
   * 组件的方法列表
   */
    methods: {
        // 播放器点击播放
        videoPlay: function videoPlay() {
            if (this.data.authenable == 0 && this.data.authOpen == false) {
                this.playAuth();
                this.setData({
                    authOpen: true
                });
            }
            if (this.data.isPlaying == false) {
                this.ccVideo.play();
                this.setData({
                    isPlaying: true
                });
            } else {
                this.ccVideo.pause();
                this.setData({
                    isPlaying: false
                });
            }
        },
        // 监听video暂停事件
        vPause: function vPause() {
            this.setData({
                isPlaying: false
            });
        },
        // 监听video播放事件
        vPlay: function vPlay() {
            this.setData({
                isPlaying: true
            });
        },
        // 点击切换倍速
        changeSpeed: function changeSpeed(e) {
            if (e.target.dataset.txt == this.data.ccH5spTxt) {
                this.setData({
                    spShow: false
                });
                return;
            }
            var index = e.target.dataset.key;
            var spNum = e.target.dataset.num;
            var spTxt = e.target.dataset.txt;
            this.setData({
                ccH5spTxt: spTxt,
                spShow: false
            });
            this.ccVideo.playbackRate(Number(spNum));
        },
        // 点击切换清晰度
        changeQuality: function changeQuality(e) {
            if (e.target.dataset.txt == this.data.ccH5hdTxt) {
                this.setData({
                    hdShow: false
                });
                return;
            }
            var hdTxt = e.target.dataset.txt;
            var vTime = this.data.vCurrentTime;
            var hdUrl = "";
            if (!!this.data.custom_id) {
                hdUrl = e.target.dataset.url + "&custom_id=" + this.data.custom_id;
            } else {
                hdUrl = e.target.dataset.url;
            }
            this.setData({
                ccH5spTxt: "常速",
                ccH5hdTxt: hdTxt,
                videoSrc: hdUrl,
                hdShow: false
            });
            var that = this;
            this.ccVideo.playbackRate(1);
            setTimeout(function() {
                that.ccVideo.seek(vTime);
                that.ccVideo.play();
            }, 300);
        },
        // 点击显示隐藏倍速列表
        clickSpShow: function clickSpShow() {
            if (this.data.spShow == true) {
                this.setData({
                    spShow: false,
                    hdShow: false
                });
            } else {
                this.setData({
                    spShow: true,
                    hdShow: false
                });
            }
        },
        // 点击显示隐藏清晰度列表
        clickHdShow: function clickHdShow() {
            if (this.data.hdShow == true) {
                this.setData({
                    spShow: false,
                    hdShow: false
                });
            } else {
                this.setData({
                    spShow: false,
                    hdShow: true
                });
            }
        },
        // 界面显示隐藏
        clickBtnsShow: function clickBtnsShow() {
            if (this.data.interFaceShow == false) {
                this.setData({
                    interFaceShow: true,
                    spShow: false,
                    hdShow: false
                });
            } else {
                this.setData({
                    interFaceShow: false,
                    spShow: false,
                    hdShow: false
                });
            }
        },
        // 监听播放器的播放进度
        vTimeupdate: function vTimeupdate(e) {
            this.setData({
                ccH5TimeCurrent: this.timeFormat(e.detail.currentTime),
                ccH5TimeTotal: this.timeFormat(e.detail.duration),
                dragBtnleft: e.detail.currentTime / e.detail.duration * (this.data.second_width - 116) - 15,
                percent: e.detail.currentTime / e.detail.duration * 100,
                vCurrentTime: e.detail.currentTime,
                vDuration: e.detail.duration
            });
        },
        // 时间转成00:00格式
        timeFormat: function timeFormat(time) {
            var t = parseInt(time), h, i, s;
            h = Math.floor(t / 3600);
            h = h ? h + ":" : "";
            i = h ? Math.floor(t % 3600 / 60) : Math.floor(t / 60);
            s = Math.floor(t % 60);
            i = i > 9 ? i : "0" + i;
            s = s > 9 ? s : "0" + s;
            return h + i + ":" + s;
        },
        // 全屏播放
        fullScreen: function fullScreen() {
            this.ccVideo.requestFullScreen();
        },
        // 监听全屏后显示系统进度条
        vFullScreen: function vFullScreen(e) {
            if (e.detail.fullScreen) {
                this.setData({
                    videoControls: true,
                    cPlayBtn: true,
                    btnsShow: false
                });
            } else {
                this.setData({
                    videoControls: false,
                    cPlayBtn: false,
                    btnsShow: true
                });
            }
        },
        // 拖拽跳转时间
        dragTime: function dragTime(e) {
            this.ccVideo.pause();
            if (e.touches[0].clientX <= 56) {
                this.setData({
                    dragBtnleft: -15,
                    percent: 0,
                    vCurrentTime: 0
                });
            } else if (e.touches[0].clientX >= this.data.second_width - 56) {
                this.setData({
                    dragBtnleft: this.data.second_width - 131,
                    percent: 100,
                    vCurrentTime: this.data.vDuration
                });
            } else {
                this.setData({
                    dragBtnleft: e.touches[0].clientX - 73,
                    percent: (e.touches[0].clientX - 58) / (this.data.second_width - 116) * 100,
                    vCurrentTime: this.data.vDuration * this.data.percent / 100
                });
            }
        },
        // 拖拽抬起跳转时间
        dragTimeEnd: function dragTimeEnd() {
            var that = this;
            this.ccVideo.seek(this.data.vCurrentTime);
            setTimeout(function() {
                that.ccVideo.play();
            }, 300);
        },
        // 播放授权
        playAuth: function playAuth() {
            var that = this;
            if (this.data.authmessage == "") {
                this.setData({
                    authmessage: "不允许观看或试看时间用尽"
                });
            }
            if (this.data.freetime == 0) {
                this.setData({
                    isPlayAuth: true,
                    videoBoxShow: false
                });
                if (that.data.authCallback != "") {
                    if (typeof app[that.data.authCallback] == "function") {
                        app[that.data.authCallback]();
                    }
                }
            } else {
                var freeT = setInterval(function() {
                    if (that.data.vCurrentTime >= that.data.freetime) {
                        clearTimeout(freeT);
                        that.setData({
                            isPlayAuth: true,
                            videoBoxShow: false,
                            authOpen: false
                        });
                        if (that.data.authCallback != "") {
                            if (typeof that.data.authCallback == "function") {
                                that.data.authCallback();
                            }
                        }
                    }
                }, 500);
            }
        },
        // 获取视频后的回调
        showPlayer: function showPlayer(that, data) {
            data = data.substring(data.indexOf("(") + 1, data.length - 1);
            var dataObj = JSON.parse(data);
            console.log(dataObj);
            console.log("他是洒脱的", that.mySubData);
            // custom_id
                        var custom_id = that.data.custom_id;
            var vSrc = "";
            if (!!that.data.custom_id) {
                vSrc = dataObj.copies[0].playurl + "&custom_id=" + custom_id;
            } else {
                vSrc = dataObj.copies[0].playurl;
            }
            that.setData({
                videoSrcList: dataObj.copies,
                videoSrc: vSrc,
                videoPoster: dataObj.img,
                ccH5hdTxt: dataObj.copies[0].desp
            });
            if (dataObj.authenable == 0) {
                that.setData({
                    authenable: dataObj.authenable,
                    authmessage: dataObj.authmessage,
                    authCallback: dataObj.callback,
                    freetime: dataObj.freetime
                });
            }
        },
        // 请求接口
        getData: function getData(vid, siteid, vc, callback) {
            var _this = this;
            wx.request({
                url: "https://p.bokecc.com/servlet/getvideofile",
                data: {
                    vid: vid,
                    siteid: siteid,
                    hlssupport: 1,
                    useragent: _this.data.uaModel,
                    vc: vc
                },
                header: {
                    "Content-Type": "applciation/json"
                },
                method: "GET",
                success: function success(res) {
                    callback(_this, res.data);
                },
                fail: function fail(err) {}
            });
        }
    }
});