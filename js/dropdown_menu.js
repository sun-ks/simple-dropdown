(function( $ ){

  $.fn.simple_dropdown = function( options ) {
    
    var elem_inner = this.next(),
    self = this,
    settings = $.extend( {
      'fadeIn_time'  : 0,
      'fadeOut_time' : 500,
    }, options ); 

    elem_inner.fadeOut(settings.fadeOut_time);
    self.click(function () {

        if ($(this).hasClass("open-drop")) {
            $(this).next().fadeOut(settings.fadeOut_time);
            $(this).removeClass('open-drop');
        } else {
            $(this).next().fadeIn(options.fadeIn_time);
            $(this).addClass('open-drop');
        }
    });

    // Mouseup textarea false
    elem_inner.mouseup(function () {
        return false
    });

    this.mouseup(function () {
        return false
    });

    // Textarea without editing.
    $(document).mouseup(function () {
        self.removeClass('open-drop');
        elem_inner.fadeOut(settings.fadeOut_time);
    });

  };
})( jQuery );

$(document).ready(function () {
    $('.dropdown').simple_dropdown({
        'fadeIn_time' : 300,
        'fadeOut_time' : 300
    });
});
