xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">' +
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="finger thumb"></div>' +
        '<div class="arm"></div>' +
        '</div>' +
        '<span class="hide" id="animation">+1</span>',
    lifecycle: {
        created: function () { },
        inserted: function () { },
        removed: function () { },
        attributeChanged: function () { }
    },
    methods: {
        someMethod: function () { }
    },
    accessors: {
        someAccessor: {
            // links to the 'some-accessor' attribute
            attribute: {},
            set: function () { },
            get: function () { }
        }
    },
    events: {
        tap: function () { },
        focus: function () { }
    }
});
