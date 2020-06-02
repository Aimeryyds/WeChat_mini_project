var t = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e.default = t, e;
}(require("../../../ec-canvas/echarts"));

getApp();

Page({
    data: {
        ec1: {
            onInit: function(e, i, r) {
                var a = t.init(e, null, {
                    width: i,
                    height: r
                });
                e.setChart(a);
                var n = {
                    title: {
                        text: "技术岗位面试占比",
                        textStyle: {
                            color: "#333"
                        },
                        left: "center",
                        top: "5%"
                    },
                    xAxis: {
                        data: [ "java", "python", "前端", "php", "安卓", "ios" ],
                        axisLine: {
                            lineStyle: {
                                color: "#333"
                            }
                        }
                    },
                    yAxis: {},
                    grid: {
                        right: "5%"
                    },
                    series: [ {
                        name: "占比",
                        type: "bar",
                        data: [ 32, 28.8, 14.4, 8.9, 6.4, 5.9 ],
                        itemStyle: {
                            color: "rgb(34, 82, 160)"
                        }
                    } ]
                };
                return a.setOption(n), a;
            }
        },
        ec2: {
            onInit: function(e, i, r) {
                var a = t.init(e, null, {
                    width: i,
                    height: r
                });
                e.setChart(a);
                var n = {
                    title: {
                        text: "中软Java学员就业薪酬变化",
                        textStyle: {
                            color: "#333"
                        },
                        left: "center",
                        top: "5%"
                    },
                    xAxis: {
                        data: [ "2014", "2015", "2016", "2017" ],
                        axisLine: {
                            lineStyle: {
                                color: "#333"
                            }
                        }
                    },
                    yAxis: {},
                    grid: {
                        left: "15%",
                        right: "5%"
                    },
                    series: [ {
                        name: "占比",
                        type: "bar",
                        data: [ 4500, 4900, 5500, 6e3 ],
                        itemStyle: {
                            color: "rgb(34, 82, 160)"
                        }
                    } ]
                };
                return a.setOption(n), a;
            }
        },
        ec3: {
            onInit: function(e, i, r) {
                var a = t.init(e, null, {
                    width: i,
                    height: r
                });
                e.setChart(a);
                var n = {
                    title: {
                        text: "学员薪资发展变化",
                        textStyle: {
                            color: "#333"
                        },
                        left: "center",
                        top: "5%"
                    },
                    xAxis: {
                        data: [ "应届", "2-3年", "5年以上" ],
                        axisLine: {
                            lineStyle: {
                                color: "#333"
                            }
                        }
                    },
                    yAxis: {},
                    grid: {
                        left: "15%",
                        right: "5%"
                    },
                    series: [ {
                        name: "占比",
                        type: "bar",
                        data: [ 5897, 15921, 18992 ],
                        itemStyle: {
                            color: "rgb(34, 82, 160)"
                        }
                    } ]
                };
                return a.setOption(n), a;
            }
        },
        ec4: {
            onInit: function(e, i, r) {
                var a = t.init(e, null, {
                    width: i,
                    height: r
                });
                e.setChart(a);
                var n = {
                    title: {
                        text: "中软java学员岗位发展变化图",
                        textStyle: {
                            color: "#333"
                        },
                        left: "center",
                        top: "5%"
                    },
                    legend: {
                        top: "90%"
                    },
                    tooltip: {},
                    dataset: {
                        source: [ [ "product", "应届", "毕业3年以上", "毕业五年以上" ], [ "软件工程师", 62, 10, 2 ], [ "高级工程师", 61, 59, 23 ], [ "项目主管", 23, 40, 48 ], [ "项目经理", 5, 24, 48 ] ]
                    },
                    grid: {
                        left: "10%",
                        right: "5%"
                    },
                    xAxis: {
                        type: "category"
                    },
                    yAxis: {},
                    series: [ {
                        type: "bar"
                    }, {
                        type: "bar"
                    }, {
                        type: "bar"
                    } ]
                };
                return a.setOption(n), a;
            }
        }
    },
    onReady: function() {}
});