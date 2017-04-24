$(function() {
    $('#navbar li img').each(function(i) {
        $(this).hover(function() {
            $(this).attr('src', $(this).data('hover'));
        }, function() {
            $(this).attr('src', $(this).data('init'));
        });
    });
});
