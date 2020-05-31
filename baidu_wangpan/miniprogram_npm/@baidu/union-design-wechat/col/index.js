Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    relations: {
        "../row/index": {
            type: "parent"
        }
    },
    properties: {
        span: {
            value: 0,
            type: Number
        },
        offset: {
            value: 0,
            type: Number
        }
    }
});