var e = module.exports = {};

Object.defineProperty(e, "__esModule", {
    value: !0
});

e.PHONE = "4008515515", e.BASEURL = {
    index: "/pages/index",
    search: "/pages/search/search?cityid=",
    switch: "/pages/switch/switch",
    esf_list: "/pages/esf/esf_list?cityid=",
    esf_details: "/pages/esf/esf_details?house_id=",
    rent_list: "/pages/rent/rent_list?cityid=",
    rent_details: "/pages/rent/rent_details?house_id=",
    comment: "/pages/comment/comment?house_id=",
    similar: "/pages/similar/similar?",
    appoint: "/pages/appoint/appoint"
}, e.DefaultCacheTime = 864e5, e.BUSINESSTYPE = [ "二手房", "租房", "卖房" ];

var t = e.DEBUG = !1, s = e.URL = "https://xcx.5i5j.com/v1/wechatapi/";

e.URL1 = t ? "http://www.5i5j.cn/wechatAPI/" : s, e.URL2 = t ? "http://m.bliss.cn/v1/wechatapi/" : s, 
e.URL3 = t ? "http://xcx-test.5i5j.com/wechatapi/" : s, e.DEFAULTIMG = {
    list: "/img/source/default_list.jpg",
    detail: "/img/source/default_detail.jpg",
    broker: "/img/source/default_broker.jpg"
}, e.API = {
    getcitylist: "getcitylist",
    getallplaces: "getallplaces",
    getsecondhousedetail: "getsecondhousedetail",
    getrentalhousedetail: "getrentalhousedetail",
    getconditions: "getconditions",
    gethouse: "gethouse",
    searchhouses: "searchhouses",
    brokerinfo: "brokerinfo"
};