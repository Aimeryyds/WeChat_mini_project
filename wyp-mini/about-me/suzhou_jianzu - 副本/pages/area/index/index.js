var t = require("../../../utils/add.js"), i = {
    data: {},
    onLoad: function(i) {
        this.setData({
            local: {
                addr: i.addr,
                lat: i.lat,
                lng: i.lng
            }
        }), console.log(t);
        var r = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], s = [ {
            city: "北京市",
            N: "39.55",
            E: "116.24",
            firststr: "B"
        }, {
            city: "成都市",
            N: "30.4",
            E: "104.04",
            firststr: "C"
        }, {
            city: "佛山市",
            N: "23.02",
            E: "113.06",
            firststr: "F"
        }, {
            city: "广州市",
            N: "23.08",
            E: "113.14",
            firststr: "G"
        }, {
            city: "杭州市",
            N: "30.16",
            E: "120.1",
            firststr: "H"
        }, {
            city: "南京市",
            N: "32.03",
            E: "118.46",
            firststr: "N"
        }, {
            city: "深圳市",
            N: "22.33",
            E: "114.07",
            firststr: "S"
        }, {
            city: "上海市",
            N: "31.14",
            E: "121.29",
            firststr: "S"
        }, {
            city: "天津市",
            N: "39.02",
            E: "117.12",
            firststr: "T"
        }, {
            city: "武汉市",
            N: "30.35",
            E: "114.17",
            firststr: "W"
        }, {
            city: "西安市",
            N: "34.17",
            E: "108.57",
            firststr: "X"
        }, {
            city: "重庆市",
            N: "29.35",
            E: "106.33",
            firststr: "Z"
        } ];
        this.setData({
            add: t,
            hotaddr: s,
            temABC: r
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    slide: function(t) {
        var i = this;
        i.setData({
            show: 1,
            strA: t.target.dataset.index,
            toView: t.target.dataset.index
        }), setTimeout(function() {
            i.setData({
                show: 0
            });
        }, 2e3);
    },
    strA: function(t) {
        console.log(t);
    },
    add: function(t) {
        var i = t.target.dataset.lat, r = t.target.dataset.lng, s = t.target.dataset.index;
        wx.reLaunch({
            url: "../../index/index?lat=" + i + "&lng=" + r + "&city=" + s
        });
    },
    formSubmit: function(i) {
        for (var r in t) for (var s in t[r].item) if (t[r].item[s].city == i.detail.value) {
            var a = t[r].item[s].N, e = t[r].item[s].E, n = t[r].item[s].city;
            wx.reLaunch({
                url: "../../index/index?lat=" + a + "&lng=" + e + "&city=" + n
            });
        }
    }
};

Page(i);