var e = {
    callbackObj: {}
};

!function(t) {
    t.requestPayment = function(e) {
        c(e);
    };
    var c = function(c) {
        var a = e.callbackObj;
        a._complete = a.complete, a.complete = function(e) {
            var t = e.errMsg;
            "request:ok" != t && "requestPayment:fail cancel" != t && "requestPayment:cancel" != e.errMsg && "requestPayment:ok" != t && console.log("get wxpay err!!errMsg=" + t), 
            a._complete && a._complete(e);
        }, Object.assign(c, t.callbackObj), wx.requestPayment(c);
    };
}(e), module.exports = e;