function r(r) {
    return 200 == r ? L.SuccessCode : r >= 500 ? L.ErrorCode.REQUEST_FALIURE_500 : r >= 400 && r < 500 ? L.ErrorCode.REQUEST_FALIURE_400 : L.ErrorCode.REQUEST_FAILURE_UNKNOW;
}

function e(r) {
    return void 0 == r || null == r || "" == r || "null" == r || "[]" == r || "{}" == r;
}

function o(r) {
    return "function" == typeof r;
}

function _(_, s, u) {
    var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "POST";
    try {
        if (e(_)) throw L.ErrorCode.URL_IS_NULL;
        if (e(s)) throw L.ErrorCode.PARAMS_IS_NULL;
        if (e(u)) throw L.ErrorCode.CALLBACK_IS_NULL;
        wx.request({
            url: _,
            data: s,
            method: c,
            header: {
                "content-type": "application/json"
            },
            success: function(_) {
                var s = r(_.statusCode);
                s == L.SuccessCode ? o(u.success) ? e(_.data) || e(_.data.data) ? u.success(null, L.SuccessCode.NO_DATA) : u.success(_.data, L.SuccessCode.NORMAL) : o(u.failure) && u.failure(L.ErrorCode.CALLBACK_SUCCESS_IS_NOT_FUNCTION) : o(u.failure) && u.failure(s);
            },
            fail: function(e) {
                o(u.failure) && u.failure(r(e.statusCode));
            }
        });
    } catch (r) {
        e(u) ? console.log(r) : o(u.failure) ? u.failure(r) : console.log(L.ErrorCode.CALLBACK_FAILURE_IS_NOT_FUNCTION);
    }
}

var s = require("address.js"), L = {
    SuccessCode: {
        NORMAL: "",
        NO_DATA: "没有更多数据"
    },
    ErrorCode: {
        URL_IS_NULL: "URL为空",
        PARAMS_IS_NULL: "参数为空",
        FILE_UPLOAD_FILEPATH_IS_NULL: "上传文件资源路径为空",
        FILE_UPLOAD_NAME_IS_NULL: "文件上传对应的key为空",
        CALLBACK_IS_NULL: "回调为空",
        CALLBACK_SUCCESS_IS_NOT_FUNCTION: "回调的success不是一个function",
        CALLBACK_FAILURE_IS_NOT_FUNCTION: "回调的failure不是一个function",
        REQUEST_FALIURE_400: "加载失败，请求异常",
        REQUEST_FALIURE_500: "加载失败，服务异常",
        REQUEST_FAILURE_UNKNOW: "加载失败，请检查网络"
    }
};

module.exports = {
    Address: s.Address,
    MessageCode: L,
    GET: function(r, e, o) {
        _(r, e, o, "GET");
    },
    POST: function(r, e, o) {
        _(r, e, o);
    },
    UPLOAD: function(_, s, u) {
        var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, C = arguments[4];
        try {
            if (e(_)) throw L.ErrorCode.URL_IS_NULL;
            if (e(s)) throw L.ErrorCode.FILE_UPLOAD_FILEPATH_IS_NULL;
            if (e(u)) throw L.ErrorCode.FILE_UPLOAD_NAME_IS_NULL;
            if (e(C)) throw L.ErrorCode.CALLBACK_IS_NULL;
            wx.uploadFile({
                url: _,
                filePath: s,
                name: u,
                formData: c,
                success: function(_) {
                    var s = r(_.statusCode);
                    s == L.SuccessCode ? o(C.success) ? e(_.data) ? C.success(null, L.SuccessCode.NO_DATA) : C.success(_.data, L.SuccessCode.NORMAL) : o(C.failure) && C.failure(L.ErrorCode.CALLBACK_SUCCESS_IS_NOT_FUNCTION) : o(C.failure) && C.failure(s);
                },
                fail: function(e) {
                    o(C.failure) && C.failure(r(e.statusCode));
                }
            });
        } catch (r) {
            e(C) ? console.log(r) : o(C.failure) ? C.failure(r) : console.log(L.ErrorCode.CALLBACK_FAILURE_IS_NOT_FUNCTION);
        }
    }
};