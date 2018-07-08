xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">' +
    '<div class="finger"></div>' +
    '<div class="finger"></div>' +
    '<div class="finger"></div>' +
    '<div class="finger"></div>' +
    '<div class="finger thumb"></div>' +
    '<div class="arm"></div>' +
    '</div>' + '<span class="hide" id="animation">+1</span>',
    lifecycle:{
      created: function(){
        // alert(this.firstElementChild);
        // Alerts the input specified via the 'content' property
      }
    },
    methods: {
      shout: function(message){
        setTimeout(function(){
         alert(message);
        }, this.delay);
      }
    },
    accessors: {
      delay: {
        attribute: {}
      }
    },
    events: {
      tap: function(){
        this.shout(this.firstElementChild.value);
      }
    }
  });