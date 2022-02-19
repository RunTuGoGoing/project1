// 数据库连接
$(function () {
    $.ajax({
        url: '../interface/getltems.php',
        type: 'get',
        dataType: 'json'
    }).then(res => {
        let template = '';

        res.forEach(elm => {
            let pic = JSON.parse(elm.picture);
            
            template += `<div class="block">
                            <a href="../src/item.html?id=${elm.id}">
                                <img src="../${pic[0].src}" alt="">
                                <h4>${elm.title}</h4>
                            </a>
                            <p><em>¥</em>${elm.price}</p>
                         </div>`
        });

        $('#one-line-first').html(template);
        
    }).catch(xhr => {
        console.log(xhr.status);
    });
});