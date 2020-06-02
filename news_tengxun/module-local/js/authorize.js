var t, n;

function o(t, n) {
    t.setData({
        showUserInfoAuthDialog: n
    });
}

function u() {
    try {
        t();
    } catch (t) {}
}

function i() {
    try {
        n();
    } catch (t) {}
}

module.exports = {
    onAuthOkBtnTap: function(t, n) {},
    onAuthCancelBtnTap: function(t, n) {
        o(t, !1), i();
    },
    onAuthDialogOutTap: function(t, n) {},
    bindAuthGetUserInfo: function(t, n) {
        n.detail && n.detail.userInfo ? u() : i(), o(t, !1);
    },
    bindAuthGetUserInfoForMeTab: function(t, n) {
        n.detail && n.detail.userInfo ? (u(), o(t, !1)) : (i(), o(t, !0));
    },
    launchUserInfoAuthDialog: function(u, i, a) {
        o(u, !0), t = i, n = a;
    },
    showAuthDialog: o
};