Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    relations: {
        "../grid/index": {
            type: "parent"
        },
        "../grid-icon/index": {
            type: "child"
        }
    },
    data: {
        width: "33.33%"
    }
});