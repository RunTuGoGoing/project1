$(function () {
    let shop = cookie.get('shop');

    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        url: '../interface/shop.php',
        data: {
            idList
        },
        type: 'get',
        dataType: 'json'
    }).then(res => {

        let template = '';
        res.forEach(el => {
            let picture = JSON.parse(el.picture);

            let current = shop.filter(elm => elm.id == el.id);

            template += `<ul id="big_b">
<li>
    <form action="">
        <input type="radio" name="rad-all" class="allCheck-B" id="allCheck-B">
        <label class="labe" for=""></label>
    </form>
</li>
<li>
    <img src="../${picture[0].src}" alt="">
    <div class="text">
        <div class="topA">
            <a href="../src/item.html?id=${el.id}">
               ${el.title}
            </a>
        </div>
        <div class="bottomA">
            <a href="">
                <img src="../src/img/001.png" alt="">
                <img src="../src/img/002.png" alt="">
                <img src="../src/img/003.png" alt="">
            </a>
        </div>
    </div>
</li>
<li>
    <p>
        颜色分类：马里奥主题键帽-pbt（卫
        <br>
        星轴结构）
    </p>
    <div></div>
    <span>修改</span>
</li>
<li>
    <em>￥178.00</em>
    <em>
    <span>￥</span>  
    <span id="price-one">${parseFloat(el.price).toFixed(2)}</span>
    </em>
</li>
<li>
    <a href="javaScript:;" id="down">-</a>
    <input type="text" placeholder="1" id="digit" value="${current[0].num}">
    <a href="javaScript:;" id="up">+</a>
</li>
<li>
    <p id="money">
        ￥${(el.price*current[0].num).toFixed(2)}
    </p>
</li>
<li>
    <a href="">移入收藏夹</a>
    <a href="javaScript:;" class="removeItem" data-id="${el.id}">删除</a>
    <a href="">相似宝贝</a>
</li>
</ul>`

        });

        $('#list').html(template);

        $('#list .removeItem').on('click', function () {
            let result = shop.filter(el => el.id != $(this).attr('data-id'));
            cookie.set('shop', JSON.stringify(result));

            var arr = shop.findIndex(function (val, ind) {
                return ind;
            })

            if (arr == -1) {
                location.href = '../src/shop.html';
            } else {
                location.reload();
            }
        });

        // -------------------------------------------------------------------------
        // 单选框的选中
        var flag = false;
        $(':radio').on('click', function () {
            let index = $(':radio').index(this);
            if (flag = !flag) {
                $('.labe').eq(index).addClass('bef').removeClass('aft');
            } else {
                $('.labe').eq(index).addClass('aft').removeClass('bef');
            }
        })

        // 总金额
        $('input').on('focus', function () {
            let ht = $('#money').html();

            $('#allMoney').html(ht);
        })

        $('#money').on('change', function () {
            let ht = $('#money').text();

            $('#allMoney').text(ht);
        })

        // 选中商品后商品背景颜色改变
        var god = false;
        $('#allCheck-B').on('click', function () {
            let index = $('#big_b').index(this);
            if (god = !god) {
                $('#big_b').css('background', 'rgb(255,248,225)')
                $('#bg').css('background', '#FF4400');
            } else {
                $('#bg').css('background', '#B0B0B0');
                $('#big_b').css('background', '#fff')
            }
        })

        // 增加按钮
        $('#up').on('click', function () {
            let number = $('#digit').attr('value');
            number++;
            $('#digit').attr('value', number++);
            let mon = $('#price-one').html();
            $('#money').html(`￥${(number-1)*mon}.00`);
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
            let mon = $('#price-one').html();
            $('#money').html(`￥${(number+1)*mon}.00`);
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
    }).catch(xhr => {});
})