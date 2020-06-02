Component({
    properties: {},
    data: {
        titleString: "",
        subTitleString: "",
        cancelTitleString: "",
        okTitleString: "",
        actionTag: 0,
        alertStatus: "open",
        showModalStatus: !1,
        hasCancelBtn: !0,
        hasOkBtn: !0,
        hasSubTitle: !0,
        showCloseBtn: !0,
        needKFBtn: !1
    },
    methods: {
        showKFAlertView: function(t, a, e, s, i, n, l) {
            var h = a.length > 0, o = e.length > 0;
            this.setData({
                titleString: t,
                subTitleString: a,
                cancelTitleString: e,
                okTitleString: s,
                hasCancelBtn: o,
                hasSubTitle: h,
                actionTag: i,
                needKFBtn: n,
                showCloseBtn: l
            }), this.showAlert(this.data.alertStatus), this.data.alertStatus = "close";
        },
        showAlertView: function(t, a, e, s, i, n) {
            var l = a.length > 0, h = e.length > 0, o = s.length > 0;
            this.setData({
                titleString: t,
                subTitleString: a,
                cancelTitleString: e,
                okTitleString: s,
                hasCancelBtn: h,
                hasOkBtn: o,
                hasSubTitle: l,
                actionTag: i,
                showCloseBtn: n,
                needKFBtn: !1
            }), this.showAlert(this.data.alertStatus), this.data.alertStatus = "close";
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
            this.data.showCloseBtn && (this.showAlert(this.data.alertStatus), this.data.alertStatus = "open");
        },
        btnCancelAction: function() {
            this.showAlert(this.data.alertStatus), this.data.alertStatus = "open", this.triggerEvent("alertViewCancelAction", this.data.actionTag);
        }
    }
});