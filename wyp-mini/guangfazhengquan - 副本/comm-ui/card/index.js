function t() {
    var t = this.data.url, i = void 0 === t ? "" : t;
    i && "true" !== i && "false" !== i && (-1 !== [ "navigateTo", "redirectTo", "switchTab", "reLaunch" ].indexOf(this.data.linkType) ? wx[this.data.linkType].call(wx, {
        url: i
    }) : e("linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch", this.data.linkType));
}

var e = function(t, e) {
    console.warn(t);
};

Component({
    externalClasses: [ "list-item-class" ],
    options: {
        multipleSlots: !0
    },
    relations: {
        "../list-view/index": {
            type: "parent"
        }
    },
    properties: {
        title: {
            type: String,
            description: "标题"
        },
        abstract: {
            type: String,
            description: "摘要"
        },
        messageType: {
            type: String,
            value: ""
        },
        timeLength: {
            type: String,
            value: ""
        },
        author: {
            type: Array,
            value: []
        },
        attachments: {
            type: Object
        },
        tag: {
            type: String,
            description: "标题下方的标签"
        },
        image: String,
        label: {
            type: String,
            description: "标题下方的描述"
        },
        extra: {
            type: String,
            description: "标题右下角的描述"
        },
        isLink: {
            type: null,
            value: "",
            description: "是否展示右侧箭头并开启尝试以 url 跳转"
        },
        linkType: {
            type: String,
            value: "navigateTo",
            description: "链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch"
        },
        url: {
            type: String,
            value: ""
        },
        customStyle: {
            type: String,
            value: ""
        }
    },
    data: {
        isLastItem: !0
    },
    methods: {
        itemTap: function() {
            this.triggerEvent("tap", {}), t.call(this);
        },
        updateIsLastElement: function(t) {
            this.setData({
                isLastItem: t
            });
        }
    }
});