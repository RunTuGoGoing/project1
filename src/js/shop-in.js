$(function () {
    // mouseover下 横条的移动
    $('.body>.one>ul>li').on('mouseover', function () {
        let index = $('.body>.one>ul>li').index(this);

        // 获取每一个li的宽度
        let widthA = $('.body>.one>ul>li').eq(index).width();

        // 获取每次移动的距离
        let leftA = $('.body>.one>ul>li').eq(index - 1).width();

        // 自定义动画
        $('.body>.one>.move>.move-line').animate({
            width: widthA,
            left: index * leftA,
        }, 10);
    })

    $('.body>.one>ul>li').on('mouseout', function () {
        // 获取第一个li的宽度
        let widthA = $('.body>.one>ul>li').eq(0).width();

        // 自定义动画
        $('.body>.one>.move>.move-line').animate({
            width: widthA,
            left: -1,
        }, 10);
    })

    
    // 增加按键
    $('#up').on('click', function () {
        let number = $('#digit').attr('value');
        number++;
        $('#digit').attr('value', number++);

        $('#money').html(`￥${(number-1)*89}.00`);
    })

    // 减少按键
    $('#down').on('click', function () {
        let number = $('#digit').attr('value');
        if (number < 2) {
            let number = 1;
        } else {
            number--;
        }
        $('#digit').attr('value', number--);

        $('#money').html(`￥${(number+1)*89}.00`);
    })

    // 键盘事件
    $('#digit').on('keydown', function (ev) {
        let keyW = ev.originalEvent;
        let con = keyW.key;

        if (keyW.keyCode >= 48 && keyW.keyCode <= 57) {
            $('#digit').html(con);
            $('#digit').attr('value', con);

            // 计算输入的数字乘以价格
            let numberA = $('#digit').attr('value');
            $('#money').html(`￥${(numberA)*89}.00`);
        }
    })
})

$(function () {
    // 总金额
    $('input').on('focus', function () {
        let ht = $('#money').html();

        $('#allMoney').html(ht);
    })

    $('#money').on('change', function () {
        let ht = $('#money').text();
        console.log(ht);

        $('#allMoney').text(ht);
    })

    // 选中商品后商品背景颜色改变
    $('input').on('click', function () {
        $('#bg').css('background', '#FF4400');
        $('#big_b').css('background', 'rgb(255,248,225)')
    })
})

$(function () {
    // 单选框的取消选中

    // 设置开关
    var flag = false;
    $(':radio').on('click', function () {
        let index = $(':radio').index(this);
        if (flag = !flag) {
            $('.labe').eq(index).addClass('bef').removeClass('aft');
        } else {
            $('.labe').eq(index).addClass('aft').removeClass('bef');
        }
    })
})

$(function () {
    // 第一个全选框
    $('.allCheck').on('click', function () {
        $(':radio:not(.allCheck)').prop('checked', $(this).prop('checked'));
    });

    function isAllCheck() {
        let elms = Array.from($(':radio:not(.allCheck)'));
        let result = elms.every(el => $(el).prop('checked'));
        return result;
    }

    $(':radio:not(.allCheck)').on('click', function () {
        $('.allCheck').prop('checked', isAllCheck());
        $('#allMoney').html(`￥${0.00}`);
    })


    // 第二个全选框
    $('.allCheck-A').on('click', function () {
        $(':radio:not(.allCheck-A)').prop('checked', $(this).prop('checked'));
    });

    function isAllCheck() {
        let elms = Array.from($(':radio:not(.allCheck-A)'));
        let result = elms.every(el => $(el).prop('checked'));
        return result;
    }

    $(':radio:not(.allCheck-A)').on('click', function () {
        $('.allCheck-A').prop('checked', isAllCheck());

    })
})