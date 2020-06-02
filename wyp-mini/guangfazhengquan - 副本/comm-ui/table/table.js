Component({
    properties: {
        gridStyle: {
            type: Boolean,
            value: !1
        },
        columns: {
            type: Array,
            value: []
        },
        noHeader: {
            type: Boolean,
            value: !1
        },
        dataSource: {
            type: Array,
            value: [],
            observer: "observeDataSource"
        },
        moveable: {
            type: Boolean,
            value: !1
        },
        perRowHeight: {
            type: Number,
            value: 100
        },
        trStyle: {
            type: String,
            value: "padding-left:34rpx;"
        },
        theaderStyle: {
            type: String,
            value: "padding-left:34rpx;"
        },
        visibleDataSource: {
            type: Array,
            value: []
        }
    },
    data: {
        t: +new Date()
    },
    hasCheckboxNodeType: !1,
    ready: function() {
        var t = this, e = this.data.columns;
        e.forEach(function(e) {
            e.key = e.key || e.dataIndex, "checkbox" === e.nodeType && (t.hasCheckboxNodeType = !0);
        }), this.setData({
            columns: e
        });
    },
    methods: {
        getMvCtxs: function() {
            return this.mvCtxs || (this.mvCtxs = {}), this.mvCtxs;
        },
        handleKey: function(t) {
            var e = this;
            return t.forEach(function(t, a) {
                e.data.moveable || (t.key = t.key || a);
            }), t.forEach(function(t) {
                if (void 0 === t.key) {
                    if (e.data.moveable) {
                        throw new Error("如果table支持拖拽，table 组件dataSource每行数据必须包含key");
                    }
                    console.warn(msg);
                }
            }), t;
        },
        observeDataSource: function(t, e) {
            var a = this, r = this.handleKey(t);
            r.length >= 50 && e.length - t.length != 0 ? (this.setData({
                visibleDataSource: r.slice(0, 50)
            }), setTimeout(function() {
                a.setData({
                    visibleDataSource: r
                });
            }, 500)) : this.setData({
                visibleDataSource: r
            });
        },
        sort: function() {},
        posChange: function(t) {
            var e = this.data.visibleDataSource, a = t.currentTarget.dataset.idx, r = e.splice(a, 1);
            if (r.length > 0) {
                var i = r[0], o = t.detail.position.y, c = Math.ceil(o / this.data.perRowHeight);
                c = Math.min(c, e.length), c = Math.max(c, 0), e.splice(c, 0, i), this.setData({
                    visibleDataSource: e
                }), this.triggerEvent("move", e);
            }
        },
        onCheckBoxChange: function(t) {
            var e = t.currentTarget.dataset.idx, a = this.data.visibleDataSource;
            a[e].checked = !a[e].checked, this.triggerEvent("checkedchange", a), this.setData({
                visibleDataSource: a
            });
        },
        onClickIcon: function(t) {
            var e = t.currentTarget.dataset, a = e.icon, r = e.idx, i = e.text, o = this.data.visibleDataSource;
            this.triggerEvent("iconclick", {
                text: i,
                icon: a,
                item: o[r]
            });
        },
        onClickText: function(t) {
            var e = t.currentTarget.dataset.idx;
            if (this.hasCheckboxNodeType) {
                var a = this.data.visibleDataSource;
                a[e].checked = !a[e].checked, this.triggerEvent("checkedchange", a), this.setData({
                    visibleDataSource: a
                });
            }
        },
        getTouchNode: function(t) {
            var e = this.getMvCtxs();
            return e[t] || (e[t] = this.selectComponent("#mv_" + this.data.t + "_" + t)), e[t];
        },
        touchstart: function(t) {
            var e = t.currentTarget.dataset, a = e.rowkey;
            !0 === e.dragmarker && this.getTouchNode(a).touchstart(t);
        },
        touchend: function(t) {
            var e = t.currentTarget.dataset, a = e.rowkey;
            !0 === e.dragmarker && this.getTouchNode(a).touchend(t);
        },
        touchmove: function(t) {
            var e = t.currentTarget.dataset, a = e.rowkey;
            !0 === e.dragmarker && this.getTouchNode(a).touchmove(t);
        },
        onClickSort: function(t) {
            var e = this.data.columns, a = e[t.currentTarget.dataset.idx], r = this.data.visibleDataSource;
            a.asc ? (a.asc = !1, a.desc = !0) : (a.asc = !0, a.desc = !1), r.sort(function(t, e) {
                return t[a.dataIndex] > e[a.dataIndex] ? a.asc ? 1 : -1 : a.asc ? -1 : 1;
            }), this.setData({
                visibleDataSource: r,
                columns: e
            }), this.triggerEvent("sort", {
                items: r
            });
        }
    }
});