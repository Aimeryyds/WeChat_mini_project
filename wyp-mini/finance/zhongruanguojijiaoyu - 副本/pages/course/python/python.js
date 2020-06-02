var t = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e.default = t, e;
}(require("../../../ec-canvas/echarts"));

getApp();

Page({
    data: {
        ec1: {
            onInit: function(e, r, i) {
                var n = t.init(e, null, {
                    width: r,
                    height: i
                });
                e.setChart(n);
                var a = {
                    title: {
                        text: "岗位需求量",
                        textStyle: {
                            color: "#333",
                            fontSize: 14
                        },
                        left: "center",
                        top: "7%"
                    },
                    xAxis: {
                        data: [ "北京", "上海", "广州", "深圳", "大连", "天津", "武汉", "长沙", "西安" ],
                        axisLine: {
                            lineStyle: {
                                color: "#333"
                            }
                        }
                    },
                    yAxis: {},
                    grid: {
                        right: "2%"
                    },
                    series: [ {
                        name: "占比",
                        type: "bar",
                        data: [ 5585, 6511, 2139, 3206, 1002, 992, 2122, 1002, 932 ],
                        itemStyle: {
                            color: "rgb(34, 82, 160)"
                        }
                    } ]
                };
                return n.setOption(a), n;
            }
        }
    },
    onReady: function() {}
});