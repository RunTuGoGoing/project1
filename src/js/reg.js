$(function () {
    $('.block').on('click', function () {
        // 二级列表的出现点击事件
        $('.list').attr('style', 'display:block');
    });

    $('.list-item').on('click', function () {
        $('.list').attr('style', 'display:none');

        // 切换的点击事件
        let index = $('.list-item').index(this);
        $('.list-item').eq(index).addClass('active').siblings().removeClass('active');
        let content = $('.list-item>span:nth-of-type(1)').eq(index).html();
        $('#text').html(content);
        let contentOne = $('.list-item>span:nth-of-type(2)').eq(index).html();
        $('#number').html(contentOne);
    });

});