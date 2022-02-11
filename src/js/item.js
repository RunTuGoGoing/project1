$(function () {
    $('.first-hover').on('mouseover', function () {
        $('.hover-code').attr('style', 'display:block');
    })

    $('.first-hover').on('mouseout', function () {
        $('.hover-code').attr('style', 'display:none');
    })

    
});