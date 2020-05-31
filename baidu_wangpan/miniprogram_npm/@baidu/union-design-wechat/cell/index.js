function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, i = function(t, e) {
    console.warn(t), console.log("接受到的值为：", e);
};

Component((e = {
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    }
}, t(e, "options", {
    multipleSlots: !0,
    addGlobalClass: !0
}), t(e, "relations", {
    "../cell-group/index": {
        type: "parent"
    }
}), t(e, "properties", {
    title: {
        type: String
    },
    label: {
        type: String
    },
    value: {
        type: String
    },
    onlyTapFooter: {
        type: Boolean
    },
    isLink: {
        type: null,
        value: ""
    },
    linkType: {
        type: String,
        value: "navigateTo"
    },
    url: {
        type: String,
        value: ""
    }
}), t(e, "data", {
    isLastCell: !0
}), t(e, "methods", {
    navigateTo: function() {
        var t = this.data.url, e = a(this.data.isLink);
        this.triggerEvent("click", {}), this.data.isLink && t && "true" !== t && "false" !== t && ("boolean" === e || "string" === e ? -1 !== [ "navigateTo", "redirectTo", "switchTab", "reLaunch" ].indexOf(this.data.linkType) ? wx[this.data.linkType].call(wx, {
            url: t
        }) : i("linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch", this.data.linkType) : i("isLink 属性值必须是一个字符串或布尔值", this.data.isLink));
    },
    handleTap: function() {
        this.data.onlyTapFooter || this.navigateTo();
    },
    updateIsLastCell: function(t) {
        this.setData({
            isLastCell: t
        });
    }
}), e));