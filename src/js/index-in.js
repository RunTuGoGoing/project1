// 搜索框的固定效果
window.onload = function () {
    let pof = document.querySelector('.pof-one');

    pof.style.display = 'none';

    window.onscroll = function () {
        let top = document.documentElement.scrollTop;

        if (top > 156) {
            pof.style.display = 'block';
        }
        if (top < 156) {
            pof.style.display = 'none';
        }
    }
}

// 轮播图
$(function () {
    $('.slider').slider({
        speed: 600,
        delay: 2000
    });

    $('.slider-one').slider({
        speed: 500,
        delay: 1500
    });
});

// 楼梯特效
$(function () {
    $('#menu>a').on('click', function () {
        let top = $('#' + $(this).attr('data-title')).offset().top;
        $('html').animate({
            scrollTop: top
        }, 600);
    });

    $(window).on('scroll', function () {
        let scrollTop = $(document).scrollTop();
        
        // 滚动切换样式
        if (scrollTop > 1020) {
            $('#menu>a:nth-of-type(2)').addClass('active').siblings().removeClass('active');
        }
        if (scrollTop < 1020) {
            $('#menu>a:nth-of-type(1)').addClass('active').siblings().removeClass('active');
        }

        // 顶部按钮的出现消失
        if (scrollTop > 800) {
            $('#topUp').attr('style', 'display:block');
        }
        if (scrollTop < 800) {
            $('#topUp').attr('style', 'display:none');
        }

        // 固定效果
        if (scrollTop > 452) {
            $('.tools').attr('style', 'position:fixed;top:-296px;');
        }
        if (scrollTop < 452) {
            $('.tools').removeAttr('style');
        }
    });
});