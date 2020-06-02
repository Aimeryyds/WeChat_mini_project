module.exports = {
    randomColor: function() {
        var e = [ [ "#007AFF", "#32CEFF" ], [ "#FE5900", "#FFA500" ], [ "#fb5700", "#ffa500" ], [ "#7348ed", "#cf4dff" ] ], n = Math.floor(4 * Math.random());
        return {
            colorLeft: e[n][0],
            colorRight: e[n][1]
        };
    },
    getLevelMsg: function(e) {
        var n = {};
        return e > 0 && e < 26 ? n = {
            backgroundcolor: "#ffc600",
            iconUrl: "http://s.xnimg.cn/wap/mobile/wxMiniApp/zhiboNewWxMiniApp/images/live/live_grade_stars.png"
        } : e > 25 && e < 51 ? n = {
            backgroundcolor: "#f99718",
            iconUrl: "http://s.xnimg.cn/wap/mobile/wxMiniApp/zhiboNewWxMiniApp/images/live/live_grade_moon.png"
        } : e > 50 && e < 76 ? n = {
            backgroundcolor: "#f6591b",
            iconUrl: "http://s.xnimg.cn/wap/mobile/wxMiniApp/zhiboNewWxMiniApp/images/live/live_grade_sun.png"
        } : e >= 76 && (n = {
            backgroundcolor: "#f32861",
            iconUrl: "http://s.xnimg.cn/wap/mobile/wxMiniApp/zhiboNewWxMiniApp/images/live/live_grade_crown.png"
        }), n;
    },
    getwealthLevelMsg: function(e) {
        var n;
        return e > 0 && e < 26 ? n = "#FD67A2" : e > 25 && e < 41 ? n = "#FC4C91" : e > 40 && e < 51 ? n = "#FC2B7C" : e > 50 && e < 61 ? n = "#FC2EA9" : e > 60 && e < 71 ? n = "#F128BC" : e > 70 && e < 81 ? n = "#D723B4" : e > 80 && e < 86 ? n = "#C524C6" : e > 85 && e < 91 ? n = "#A223C6" : e > 90 && e < 96 ? n = "#8620BD" : e > 95 && e < 100 ? n = "#5C3CDE" : e > 99 && (n = "#401abd"), 
        {
            backgroundcolor: n
        };
    },
    formateTime: function(e) {
        var n = (e = new Date(e)).getFullYear(e), i = e.getMonth(e) + 1;
        i = i < 10 ? "0" + i : i;
        var o = e.getDate(e);
        return o = o < 10 ? "0" + o : o, n + "-" + i + "-" + o;
    },
    getElectAnchor: function(e) {
        for (var n = [ "959528804", "969893863", "920043010", "959528695", "962980590", "930019823", "959310800", "970236519", "970016102", "970091027", "913302719", "308214302", "964276753", "221276058", "946524863", "969005897", "959647291", "965373393", "967703443", "966902863", "969837863", "920048796", "968848864", "911750789", "935626911", "966282202", "967291139", "963266662", "913422083", "970210730", "940637287", "929569819", "968669667", "928944480", "968562108", "963109213", "962819083", "923755286", "963106794", "916060181", "967246431", "965730872", "920983508", "966176323", "969415159", "966965547", "964418368", "925008770", "968429636", "962136450", "969948628", "911445859", "851032915", "969358897", "969335261" ], i = [], o = 0; o < e.length; o++) for (var r = 0; r < n.length; r++) e[o].player_id == n[r] && i.push(e[o]);
        return i;
    }
};