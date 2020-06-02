Object.defineProperty(exports, "__esModule", {
    value: true
});

var shareImg = [ "https://jfinfo.oss-cn-beijing.aliyuncs.com/jugupiao/images/share/share_img1.png", "https://jfinfo.oss-cn-beijing.aliyuncs.com/jugupiao/images/share/share_img2.png", "https://jfinfo.oss-cn-beijing.aliyuncs.com/jugupiao/images/share/share_img3.png", "https://jfinfo.oss-cn-beijing.aliyuncs.com/jugupiao/images/share/share_img4.png", "https://jfinfo.oss-cn-beijing.aliyuncs.com/jugupiao/images/share/share_img5.png" ];

/*获取当前页面的url*/ function getCurrentPageUrlWithArgs() {
    var pages = getCurrentPages();
    var url = pages[pages.length - 1].route;
    var opt = pages[pages.length - 1].options;
    if (Object.keys(opt).length === 0) {} else {
        url += "?";
        for (var key in opt) {
            var val = opt[key];
            url += key + "=" + val + "&";
        }
        url = url.substring(0, url.length - 1);
    }
    return "/" + url;
}

/*获取当前页的url参数,参数中不能带有token,token会被截断*/ function getCurrentPageArgs() {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    return currentPage.options;
}

/*将对象转化为url参数后拼接*/ function urlEncode(url, paramObj) {
    var sdata = [];
    if (!paramObj || Object.keys(paramObj).length === 0) return url;
    for (var attr in paramObj) {
        sdata.push(attr + "=" + paramObj[attr]);
    }
    return url + "?" + sdata.join("&");
}

/*将对象转化为url参数后拼接*/ function urlEncodeSimple(paramObj) {
    var sdata = [];
    for (var attr in paramObj) {
        sdata.push(attr + "=" + paramObj[attr]);
    }
    return sdata.join("&");
}

/*webview中对象转为url参数*/ function urlEncodeNoWeburl(url, paramObj) {
    var sdata = [];
    for (var attr in paramObj) {
        if (attr != "weburl" && attr != "token") {
            sdata.push(attr + "=" + paramObj[attr]);
        }
    }
    return url + "?" + sdata.join("&");
}

/*把时间戳转为为普通日期格式*/ function getLocalTime() {
    return new Date(parseInt(new Date().getTime())).toLocaleString().replace(/:\d{1,2}$/, " ");
}

/*对象按照key值进行ASCILL码从小到发排列*/ function keySort(obj) {
    var newkey = Object.keys(obj).sort();
    var newObj = {};
    for (var i = 0; i < newkey.length; i++) {
        var _now = obj[newkey[i]];
        if (!_now && typeof _now != "undefined" && _now != 0) {
            // 做签名时把value为null的字段给截掉
        } else {
            newObj[newkey[i]] = _now;
        }
    }
    return newObj;
}

/*解析连接中的url参数为对象*/ function urlToObj(url) {
    var json = {};
    var arr = url.substr(url.indexOf("?") + 1).split("&");
    arr.forEach(function(item) {
        var tmp = item.split("=");
        json[tmp[0]] = tmp[1];
    });
    return json;
}

/*获得分享的随机图片*/ function getShareRandomImg() {
    var maxLength = shareImg.length;
    var num = parseInt(Math.random() * maxLength, 10);
    return shareImg[num];
}

exports.default = {
    getCurrentPageUrlWithArgs: getCurrentPageUrlWithArgs,
    getCurrentPageArgs: getCurrentPageArgs,
    urlEncode: urlEncode,
    urlEncodeNoWeburl: urlEncodeNoWeburl,
    getLocalTime: getLocalTime,
    urlEncodeSimple: urlEncodeSimple,
    keySort: keySort,
    urlToObj: urlToObj,
    getShareRandomImg: getShareRandomImg
};