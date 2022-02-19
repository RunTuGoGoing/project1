$(function () {
    let id = location.search.split('=')[1];

    $.ajax({
        url: '../interface/getltem.php',
        data: {
            id
        },
        dataType: 'json',
        type: 'get'
    }).then(res => {
        let pic = JSON.parse(res.picture);

        $('#imgS').attr('src', `..${pic[0].src}`);
        $('#imgB').attr('src', `..${pic[0].src}`);
        $('#imgFires').attr('src', `..${pic[0].src}`);
        $('#imgOne').attr('src', `..${pic[1].src}`);
        $('#imgTwo').attr('src', `..${pic[2].src}`);
        $('#imgThree').attr('src', `..${pic[3].src}`);
        $('#imgFour').attr('src', `..${pic[4].src}`);

        $('#text').html(res.title);

        $('#price').html(res.price);

        $('#num').html(res.num);

        $('ImgOne').html(res.details)

        // ---------------------------------------------------------------------
        // 购物车
        $('#addItem').on('click', function () {
            addItem(res.id, $("#digit").val());
            location.href = '../src/shop-in.html';
        });


    }).catch(xhr => {
        console.log(xhr.status);
    });
});

// 向cookie中添加项目
function addItem(id, num) {
    let product = {
        id,
        num
    };

    let shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);

        if (shop.some(el => el.id == id)) {
            let index = shop.findIndex(elm => elm.id == id);
            let count = parseInt(shop[index].num);
            count += parseInt(num);
            shop[index].num = count;
        } else {
            shop.push(product);
        }

    } else {
        shop = [];
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop));
}