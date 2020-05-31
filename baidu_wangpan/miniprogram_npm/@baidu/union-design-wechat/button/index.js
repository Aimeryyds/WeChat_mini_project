Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        type: {
            type: String,
            value: ""
        },
        formType: {
            type: String,
            value: ""
        },
        size: {
            type: String,
            value: "default"
        },
        inline: {
            type: Boolean,
            value: !1
        },
        long: {
            type: Boolean,
            value: !1
        },
        circle: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        loading: {
            type: Boolean,
            value: !1
        },
        openType: String,
        appParameter: String,
        hoverStopPropagation: Boolean,
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        sessionFrom: {
            type: String,
            value: ""
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },
    methods: {
        handleTap: function() {
            if (this.disabled) return !1;
            this.triggerEvent("click");
        },
        bindgetuserinfo: function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).detail, t = void 0 === e ? {} : e;
            this.triggerEvent("getuserinfo", t);
        },
        bindcontact: function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).detail, t = void 0 === e ? {} : e;
            this.triggerEvent("contact", t);
        },
        bindgetphonenumber: function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).detail, t = void 0 === e ? {} : e;
            this.triggerEvent("getphonenumber", t);
        },
        binderror: function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).detail, t = void 0 === e ? {} : e;
            this.triggerEvent("error", t);
        },
        bindopensetting: function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).detail, t = void 0 === e ? {} : e;
            this.triggerEvent("optnsetting", t);
        },
        bindlaunchapp: function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).detail, t = void 0 === e ? {} : e;
            this.triggerEvent("launchapp", t);
        }
    }
});