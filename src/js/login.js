$(function () {
    $('.ScanCode').on('click', function () {
        // 二维码登入切换
        $('.login-nav').attr('style', 'display:none');
        $('.login-box').attr('style', 'display:block');
    });

    $('.computer').on('click', function () {
        // 账号登入切换
        $('.login-nav').attr('style', 'display:block');
        $('.login-box').attr('style', 'display:none');
    });

    $('.login-text>span:nth-of-type(2)').on('click', function () {
        // 手机号码登入切换
        $('.login-form').attr('style', 'display:none');
        $('.login-form-two-all').attr('style', 'display:block');
        $('.login-text>span:nth-of-type(1)').attr('style','border:none');
        $('.login-text>span:nth-of-type(2)').attr('style','border-bottom: 2px solid #000;');
    });

    $('.login-text>span:nth-of-type(1)').on('click', function () {
        // 账号登入切换
        $('.login-form').attr('style', 'display:block');
        $('.login-form-two-all').attr('style', 'display:none');
        $('.login-text>span:nth-of-type(2)').attr('style','border:none');
        $('.login-text>span:nth-of-type(1)').attr('style','border-bottom: 2px solid #000;');
    });
});