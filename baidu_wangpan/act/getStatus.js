Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var r = e.time < e.startline, i = e.time > e.deadline, s = e.isGetPrivilege, t = e.isOrder, a = e.isAddress, d = e.isUpload, o = e.haveStores, n = 1 === e.loginInfo, l = 0 === e.loginInfo;
    return r ? "unstart" : t ? "already_view_order" : i ? "finish" : l ? "not_login" : n ? "mini_guest" : a ? "already_submit_order" : d ? "already_address" : s ? "already_upload_img" : o ? "fresh_have" : "fresh_not_have";
};