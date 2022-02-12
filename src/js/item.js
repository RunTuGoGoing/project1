$(function () {
    // 顶部二维码的hover
    $('.first-hover').on('mouseover', function () {
        $('.hover-code').attr('style', 'display:block');
    })

    $('.first-hover').on('mouseout', function () {
        $('.hover-code').attr('style', 'display:none');
    })

    // 图片小框的hover
    $('.left>ul>li').on('mouseover', function () {
        let index = $('.left>ul>li').index(this);
        $('.left>ul>li').eq(index).addClass('active').siblings().removeClass('active');
    })

    // 图片hover 显示在大框中
    $('.left>ul>li>a>img').on('mouseover', function () {
        let showImg = $('#img>.show>img');
        let showImgOne = $('.box>.zoom>.big')

        showImg.attr('src', `${$(this).attr('src')}`);
        showImgOne.attr('src', `${$(this).attr('src')}`);
    });

    // 判断开关
    var flag = false;
    $('.bottom-two>ul>.li>i>span:nth-of-type(2)').on('click', function () {
        let index = $('.bottom-two>ul>.li>i>span:nth-of-type(2)').index(this);

        // 点击消失,再次点击出现
        if (flag = !flag) {
            $('.bottom-two>ul>.li>div').eq(index).attr('style', 'display:none')
        } else {
            $('.bottom-two>ul>.li>div').eq(index).attr('style', 'display:block')
        }
    })

    // 滚动固定商品详情的导航
    $(window).on('scroll', function () {
        let scrollTop = $(document).scrollTop();

        if (scrollTop > 836) {
            $('#detailed>.wrapper>.one>.one-all').attr('style', 'position:fixed;top:0;z-index:999999999999;background:#fff;')
        }
        if (scrollTop < 836) {
            $('#detailed>.wrapper>.one>.one-all').attr('style', '')
        }
    })

    // 单选框的选中
    $('.main-all>.main-content-two>.second>.one>ul>li').on('click', function () {
        let index = $('.main-all>.main-content-two>.second>.one>ul>li').index(this);
        $('.main-all>.main-content-two>.second>.one>ul>li').eq(index).addClass('colorAll').siblings().removeClass('colorAll');
        $('.main-all>.main-content-two>.second>.one>ul>li>label>input').eq(index).attr('checked','checked').siblings().attr('checked','false')
        console.log($('.main-all>.main-content-two>.second>.one>ul>li>label>input').eq(index).attr('checked','checked'));
    })
});

// 图片的拖拽
window.onload = function () {
    var box = document.querySelector(".box");
    var show = document.querySelector(".show");
    var showWidth = show.offsetWidth;
    // console.log(showWidth);

    var showHeight = show.offsetHeight;

    var move = document.querySelector(".move");
    var moveWidth;

    var moveHeight;
    var zoom = document.querySelector(".zoom");
    var big = document.querySelector(".big");
    var pixW;
    var pixH;

    show.onmouseenter = function () {
        move.style.display = "block";
        zoom.style.display = "block";

        moveWidth = move.offsetWidth;
        moveHeight = move.offsetHeight;
        // console.log(moveWidth);

        pixW = moveWidth / showWidth;
        pixH = moveHeight / showHeight;

        var zoomWidth = zoom.offsetWidth;
        var zoomHeight = zoom.offsetHeight;

        big.style.width = zoomWidth / pixW + "px";
        big.style.height = zoomHeight / pixH + "px";
    }

    show.onmouseleave = function () {
        move.style.display = "none";
        zoom.style.display = "none";
    }

    show.onmousemove = function (event) {

        var cliX = event.clientX;
        var cliY = event.clientY;

        var ol = box.offsetWidth;
        var ot = box.offsetTop;
        // console.log(ol);
        // console.log(ot);

        var left = cliX - ol;
        var top = cliY - ot - 66;
        // console.log(top);

        if (left <= (moveWidth / 2)) {
            // 左边
            move.style.left = "0px";
        } else if (left >= (showWidth - moveWidth / 2)) {
            // 右边
            move.style.left = (showWidth - moveWidth) + "px";
        } else {
            move.style.left = left - (moveWidth / 2) + "px";
        }
        if (top <= (moveHeight / 2)) {
            // 上边
            move.style.top = "0px";
        } else if (top >= (showHeight - moveHeight / 2)) {
            // 下边
            move.style.top = (showHeight - moveHeight) + "px";
        } else {
            move.style.top = top - (moveHeight / 2) + "px";
        }

        // 显示大图
        big.style.left = -parseFloat(move.style.left) / pixW + "px";
        big.style.top = -parseFloat(move.style.top) / pixH + "px";
    }

};

// 多选框
$(function () {
    $('.one-all>.right>ul>li').on('click', function () {
        $(this).addClass('block').siblings().removeClass('block');
        let index = $('.one-all>.right>ul>li').index(this);
        $('#detailed>.wrapper>.two>.main-all>div').eq(index).addClass('display').siblings().removeClass('display');
    });
});
