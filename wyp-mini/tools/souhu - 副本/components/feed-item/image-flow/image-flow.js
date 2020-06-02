Component({
    properties: {
        config: {
            type: Object,
            value: {},
            observer: function() {}
        }
    },
    data: {
        width: 0,
        height: 0,
        imageSrc: ""
    },
    methods: {},
    lifetimes: {
        attached: function() {}
    }
});