function e(e) {
    return console.log.bind(console, e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../services/stockgroup/stockgroup"));

exports.default = {
    addStocks: function(o) {
        var u = "6613959029762818049";
        return t.default.addStocks([ {
            gid: u,
            name: "最多六个字",
            stocks: [ {
                code: "000001",
                exchange: 105
            } ]
        } ], o).then(function() {
            t.default.getGroupStocks([ {
                gid: u,
                name: "最多六个字"
            } ], o);
        }).then(e("delGroup succ"));
    },
    delGroups: function(o) {
        return t.default.delGroups([ {
            name: "哈哈2",
            gid: "6606171897572884533"
        } ], o).then(e("delGroup succ"));
    },
    addGroups: function(o) {
        return t.default.addGroups([ {
            name: "哈哈2"
        }, {
            name: "空头"
        } ], o).then(e("addGroup succ"));
    },
    renameGroup: function(o) {
        return t.default.renameGroup({
            gid: "6605437844712325123",
            name: "多头"
        }, o).then(e("renameGroup succ"));
    },
    resortGroups: function(o) {
        return t.default.resortGroups([ "6605442775334780937", "0", "6605437844712325123" ], o).then(e("resortGroups succ"));
    },
    moveStocks: function(o) {
        t.default.moveStocks([ {
            code: "000711",
            exchange: 105
        } ], {
            gid: "6616582589060743280",
            name: "呵呵"
        }, [ {
            gid: "6616582589060743281",
            name: "哈哈2"
        }, {
            gid: "6616582589060743282",
            name: "gdsg"
        } ], o).then(e("moveStocks succ")).then(function() {
            return t.default.getGroupStocks([ {
                gid: "6605437844712325123",
                name: "呵呵"
            }, {
                gid: "6606179624219050054",
                name: "哈哈2"
            } ], o).then(e("getGroupStocks succ"));
        });
    },
    setTopStock: function(o) {
        var u = "6605437844712325123";
        t.default.setTopStock({
            code: "002736",
            exchange: 105
        }, {
            gid: u,
            name: "哈哈2"
        }, o).then(e("moveStocks succ")).then(function() {
            return t.default.getGroupStocks([ {
                gid: u,
                name: "哈哈2"
            } ], o).then(e("getGroupStocks succ"));
        });
    },
    getGroupStocks: function(o) {
        return t.default.getGroupStocks([ {
            gid: "6605437844712325123",
            name: "哈哈"
        }, {
            gid: "6606179624219050054",
            name: "空头"
        } ], o).then(e("getGroupStocks succ"));
    },
    fillStockWithGroups: function(o) {
        return t.default.fillStockWithGroups([ {
            code: "000001",
            exchange: 105
        } ], o).then(e("stockGroupService.fillStockWithGroups"));
    }
};