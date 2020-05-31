Component({
    externalClasses: [ "icon-class", "action-text-class", "btn-class", "tip-class", "tip-class-text" ],
    properties: {
        icon: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        tip: {
            type: String,
            value: ""
        },
        actionText: {
            type: String,
            value: ""
        },
        actionWidth: {
            type: String
        },
        actionOpenType: {
            type: String,
            value: ""
        },
        btnText: {
            type: String,
            value: ""
        },
        status: {
            type: String,
            value: ""
        }
    },
    methods: {
        handleActionTextClick: function() {
            this.triggerEvent("actionTextClick");
        },
        handleBtnClick: function() {
            this.triggerEvent("btnClick");
        },
        getUserInfo: function(t) {
            this.triggerEvent("getUserInfo", t.detail);
        }
    }
});