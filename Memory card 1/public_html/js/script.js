$(document).ready(function () {

    var $listCard = $('.clr');

    var arr = [1, 2, 3, 4, 5, 6];
    var total = arr.length;

    var arr1 = convertPositionArray(total, arr);

    var arr3 = arr1;

    for (var i = 0; i < arr1.length; i++) {
        var str = '';

        str += '<div class="card">';
        str += '<div class="backside">';
        str += '<img src="images/0000.jpg" />';
        str += '</div>';
        str += '<div class="front">';
        str += '<img src="images/' + arr1[i] + '.jpg" />';
        str += '</div>';
        str += '</div>';

        $listCard.append(str);

    }

    var arr2 = convertPositionArray(total, arr3);

    for (var i = 0; i < arr2.length; i++) {
        var str = '';

        str += '<div class="card">';
        str += '<div class="backside">';
        str += '<img src="images/0000.jpg" />';
        str += '</div>';
        str += '<div class="front">';
        str += '<img src="images/' + arr2[i] + '.jpg" />';
        str += '</div>';
        str += '</div>';

        $listCard.append(str);

    }

    function convertPositionArray(count, convert_array) {
        var arr_change = [];
        arr_change = convert_array;

        var arr_temp_push = [];

        for (var i = 0; i < count; i++) {
            var key = Math.floor(Math.random() * arr_change.length);
            arr_temp_push.push(arr_change[key]);
            arr_change.splice(key, 1);
        }

        return arr_temp_push;
    }
    var solanbam = 0;
    var click1;
    var click2;
    var clicked = 20;

    $('.card').click(function () {



        if (clicked == 0) {
            var point = $('.card.active').length / 2;
            var msg = 'Điểm của bạn là : ' + point + ' Vui lòng bấm <a href="#" onclick="window.location.reload();">vào đây</a> để chơi lại.';
            $('.title > span').html(msg);
        } else if (clicked >= 0) {
            if (!$(this).hasClass('show')) {
                $(this).addClass('show');
                clicked--;
                $('.message').html('' + clicked);
                if (solanbam <= 2) {
                    solanbam++;
                    if (solanbam == 1) {
                        click1 = $(this).find('.front img').attr('src');
                    }
                    if (solanbam == 2) {
                        click2 = $(this).find('.front img').attr('src');
                        console.log(click1 + ' - ' + click2);
                        if (click1 == click2) {
                            if ($('.card').hasClass('show')) {
                                $('.card.show').addClass('active');
                            }
                            $('.show').css('opacity', '0.3');
                            solanbam = 0;
                        } else if (click1 != click2) {
                            setTimeout(function () {
                                $('.card').removeClass('show');

                                $('.card').each(function () {
                                    if ($(this).hasClass('active')) {
                                        $(this).addClass('show');
                                    }
                                });

                                solanbam = 0;
                            }, 1000);
                        }
                    }

                }
            }
        }
    });

});