(function( $ ){

  $.fn.myPlugin = function() {
    
    var elem_inner = this.next(),
    self = this;

    elem_inner.hide();
    $(this).click(function () {

        if ($(this).hasClass("open-drop")) {
            $(this).next().hide();
            $(this).removeClass('open-drop');
        } else {
            $(this).next().show(100, function() {
                $('.search-inner--input').focus();
            });
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
        elem_inner.hide();
    });

  };
})( jQuery );

$(document).ready(function () {
    $('.dropdown').myPlugin();
});
