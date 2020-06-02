Component({
    properties: {
        closeIsHidden: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        titleString: "",
        subTitleString: "",
        cancelTitleString: "",
        okTitleString: "",
        actionTag: 0,
        alertStatus: "open",
        showModalStatus: !1,
        hasCancelBtn: !0,
        hasSubTitle: !0,
        isIosPlatform: !1
    },
    methods: {
        showAlertView: function(t, a, e, i, s) {
            this.data.alertStatus = "open";
            var n = a.length > 0, l = e.length > 0;
            getApp();
            this.setData({
                titleString: t,
                subTitleString: a,
                cancelTitleString: e,
                okTitleString: i,
                hasCancelBtn: l,
                hasSubTitle: n,
                actionTag: s
            }), this.showAlert(this.data.alertStatus), this.data.alertStatus = "close";
        },
        changeAlertView: function(t, a, e, i, s) {
            this.data.alertStatus = "open";
            var n = a.length > 0, l = e.length > 0;
            this.setData({
                titleString: t,
                subTitleString: a,
                cancelTitleString: e,
                okTitleString: i,
                hasCancelBtn: l,
                hasSubTitle: n,
                actionTag: s
            }), this.data.alertStatus = "close";
        },
        showAlert: function(t) {
            "close" == t ? this.setData({
                showModalStatus: !1
            }) : this.setData({
                showModalStatus: !0
            });
        },
        btnOkAction: function() {
            this.showAlert(this.data.alertStatus), this.data.alertStatus = "open", this.triggerEvent("alertViewOkAction", this.data.actionTag);
        },
        btnCloseAction: function() {
            this.showAlert(this.data.alertStatus), this.data.alertStatus = "open";
        },
        btnCancelAction: function() {
            this.showAlert(this.data.alertStatus), this.data.alertStatus = "open", this.triggerEvent("alertViewCancelAction", this.data.actionTag);
        }
    }
});