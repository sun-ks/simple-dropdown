function DropdownMenu(options) {

    var self = this,
        elem = options.elem,
        elem_inner = elem.next();

    elem_inner.hide();
    elem.click(function () { console.log('click'); console.log(this);


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

    elem.mouseup(function () {
        return false
    });

    // Textarea without editing.
    $(document).mouseup(function () {
        elem.removeClass('open-drop');
        elem_inner.hide();
    });
}

$(document).ready(function () {
    new DropdownMenu({
        elem: $('.dropdown')
    });
});
