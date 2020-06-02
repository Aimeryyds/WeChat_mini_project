require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var t = require("../../store/index"), i = require("../../utils/common"), o = require("../../services/jump");

Component({
    properties: {
        type: String,
        icon: String,
        name: String,
        description: String,
        uin: String,
        coral_uid: String,
        mediaId: String,
        topicId: {
            type: String,
            observer: function(o) {
                o && (this.updateJoinCount(t.topic.joinCountMap[o]), t.topic.watch("joinCountMap.".concat(o), this.updateJoinCount), 
                this.setData({
                    readCountStr: (0, i.formatCount)(this.data.readCount),
                    defaultIcon: ""
                }));
            }
        },
        readCount: Number,
        isMyFollow: Boolean,
        isMyFans: Boolean
    },
    data: {
        readCountStr: "",
        joinCountStr: "",
        joinCount: 0,
        defaultIcon: "http://mat1.gtimg.com/www/images/news_minipro/personal_default.png"
    },
    created: function() {
        this.updateJoinCount = this.updateJoinCount.bind(this);
    },
    detached: function() {
        "topic" === this.data.type && this.data.topicId && t.topic.unWatch("joinCountMap.".concat(this.data.topicId), this.updateJoinCount);
    },
    methods: {
        tapItem: function() {
            "topic" === this.data.type ? (0, o.navigateTo)(o.PAGE_PATH.TOPIC, {
                tpid: this.data.topicId
            }) : "media" === this.data.type ? (0, o.navigateTo)(o.PAGE_PATH.USER, {
                mediaId: this.data.mediaId
            }) : (0, o.navigateTo)(o.PAGE_PATH.USER, {
                coral_uid: this.data.coral_uid,
                uin: this.data.uin
            });
        },
        updateJoinCount: function(t) {
            this.setData({
                joinCount: t || 0,
                joinCountStr: (0, i.formatCount)(t)
            });
        }
    }
});