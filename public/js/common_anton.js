$(function () {
    $('.bill_toggle_checkbox').change(function () {
        $('.bill_toggle_wrpr h3').removeClass('active');
        if (this.checked) {
            $('.bill_toggle_wrpr h3').eq(1).addClass('active');
        } else {
            $('.bill_toggle_wrpr h3').eq(0).addClass('active');
        }
    });

    if ($('.s_listing_content').length) {
        function checkWidth() {
            let imgWidth   = $('.s_listing_content .listing_img').width();
            let contWidth  = $('.header .container').width();
            let contOffset = $('.header .container').offset().left;

            $('.s_listing_content .inner_content_body').width(contWidth - imgWidth + contOffset + 15);
            $('.s_listing_content .inner_footer').width(contWidth - imgWidth + contOffset - 15);
        }

        setTimeout(function () {
            checkWidth();
        }, 100);

        $(window).resize(checkWidth);
    }

    var bussinessNames = [
        'Bussiness Name 1',
        'Bussiness Name 2',
        'Bussiness Name 3',
        'Bussiness Name 4',
        'Bussiness Name 5',
        'Bussiness Name 6',
        'Bussiness Name 7',
        'Bussiness Name 8',
        'Bussiness Name 9',
        'Bussiness Name 10',
    ];

    $('#business_input')
        .autocomplete({
            source   : bussinessNames,
            minLength: 0,
        })
        .on('focus', function () {
            $(this).keydown();
        });

    var stateNames = [
        'State Name 1',
        'State Name 2',
        'State Name 3',
        'State Name 4',
        'State Name 5',
        'State Name 6',
        'State Name 7',
        'State Name 8',
        'State Name 9',
        'State Name 10',
    ];

    $('#state_input')
        .autocomplete({
            source   : stateNames,
            minLength: 0,
        })
        .on('focus', function () {
            $(this).keydown();
        });

    if ($('.limited_textarea_wrpr').length) {
        $('.limited_textarea_wrpr textarea').on('keyup', function () {
            let limitTextNumber = $('.limited_textarea_wrpr textarea').attr('maxlength');
            var limitTextCount  = $('.limited_textarea_wrpr textarea').val().length;

            $('.limited_textarea_wrpr .textarea_limited_number .number').text(
                limitTextNumber - limitTextCount,
            );
        });
    }

    if ($('#single_dropzone').length) {
        $('#single_dropzone').dropzone({
            url      : 'upload.php',
            clickable: '#dz_upload_btn',
        });
    }

    if ($('#datepicker_one').length && $('#datepicker_two').length) {
        // Next Month Date
        let datepickerTwoDate = new Date();
        datepickerTwoDate.setMonth(datepickerTwoDate.getMonth() + 1, 1);

        $('#datepicker_one').datepicker();

        $('#datepicker_two').datepicker({defaultDate: datepickerTwoDate});
    }

    $('.mob_menu_btn').click(function () {
        $(this).toggleClass('active');
        $('.header_nav').toggleClass('active');
        $('body').toggleClass('menu_open');
        return false;
    });

    var isEdge = /Edge/.test(navigator.userAgent);

    if (isEdge) {
        document.documentElement.classList.add('edge');
    }

    var uaTwo   = window.navigator.userAgent;
    var isIETwo = /MSIE|Trident/.test(uaTwo);

    if (isIETwo) {
        document.documentElement.classList.add('ie');
    }

    $('.fancybox_close_btn').click(function () {
        $.fancybox.close();
        return false;
    });

    $('.open_delete_buspopup').click(function () {
        $.fancybox.close();
        $.fancybox.open($('#deleteb'));

        return false;
    });

    $('.message_item_flag').click(function () {
        $(this).toggleClass('active');

        return false;
    });

    let messagesMarkedAmount = 0;

    $('.message_item_checkbox input').change(function () {
        if ($(this).prop('checked') == true) {
            messagesMarkedAmount += 1;
            $(this).closest('.message_table_item').addClass('marked');
        } else {
            messagesMarkedAmount -= 1;
            $(this).closest('.message_table_item').removeClass('marked');
        }
        messagesCheck();
    });

    function messagesCheck() {
        $('.messages_marked_amount').text(messagesMarkedAmount);
        if (messagesMarkedAmount !== 0) {
            $('.top_title_messages').removeClass('active');
            $('.top_title_actions').addClass('active');
        } else {
            $('.top_title_messages').addClass('active');
            $('.top_title_actions').removeClass('active');
        }
    }

    $('.message_table_item td:not(:nth-child(1))').click(function () {
        $('.messages_s').addClass('chat_open');

        $(this).closest('.message_table_item').addClass('this_message_chat');
        return false;
    });

    $('.close_message_btn').click(function () {
        $('.messages_s').removeClass('chat_open');

        $('.message_table_item').removeClass('this_message_chat');
        return false;
    });

    $('.verify_phone_email_btn_next').click(function () {
        $.fancybox.close();
        $.fancybox.open($('#verify_phone_email'));

        return false;
    });
    $('.almost_done_phone_email_btn').click(function () {
        $.fancybox.close();
        $.fancybox.open($('#almost_done_phone_email'));

        return false;
    });
    $('.verif_email_done_btn').click(function () {
        $.fancybox.close();

        return false;
    });
    $('.daterangepicker_parent').datepicker({
        inline  : true,
        language: 'en',
    });
    $('.datapicker_single_range').datepicker({
        language: 'en',
    });

    $('.datepicker_checkbox_item input').change(function () {
        if ($(this).val() == 'open_datapicker') {
            $('.single_datepicker').removeClass('datepicker_hide');
        } else {
            $('.single_datepicker').addClass('datepicker_hide');
        }
    });

    $('[data-fancybox="gallery"]').fancybox({
        thumbs: {
            autoStart: true,
            axis     : 'x',
        },
    });

    $('.room_galery_item img').click(function () {
        let thisSrc = $(this).attr('src');
        $('.slick-active .room_galery_item.big_item img').attr('src', thisSrc);
        $('.gallery_big_photo_expand').attr('href', thisSrc);
    });

    $('#gallery_right_photo_gallery').fancybox({
        touch  : false,
        toolbar: true,
    });

    $(document).on('click', '.expand-all-right', function (e) {
        e.preventDefault();

        $.fancybox.open({
            src : '#gallery_right_photo_gallery',
            opts: {
                touch  : false,
                toolbar: true,
            },
        });

        return false;
    });

    $('.edit_phone_sendcode_btn').click(function () {
        $('.edit_phone_sendcode_btnwrpr').removeClass('active');
        $('.edit_phone_verif_code').addClass('active');

        return false;
    });
});

(function () {
    if (document.querySelectorAll('.rp-info').length && document.querySelectorAll('.more').length) {
        if (window.innerWidth <= 415) {
            const linkMore = document.querySelector('.more').cloneNode(true),
                  baseInfo = document.querySelector('.rp-info').cloneNode(true),
                  listIcon = document.querySelector('.action-item.edit.fav_btn').cloneNode(true);
            $('.s-discover .card-room .room-about, .profile_owner_s .card-room .room-about').append(linkMore);
            $('.room-price .rent span').append(baseInfo);
            $('.card-room .bottom-info').append(listIcon);
        }
    }
})();



$( ".month .up" ).click(function(){
    let number = $(this).closest(".month").find(".number").text();
    console.log(number);
    if (number < 12){
        let numberUP = (Number(number) + 1);
        if (number < 9) {
            $(this).closest(".month").find(".number").html('0' + numberUP)
        } else {
            $(this).closest(".month").find(".number").html(numberUP)
        }
    }

});

$( ".month .down" ).click(function(){
    let number = $(this).closest(".month").find(".number").text();
    console.log(number);
    if (number > 1){
        let numberDown = (Number(number) - 1);
        if (number < 9) {
            $(this).closest(".month").find(".number").html('0' + numberDown)
        } else {
            $(this).closest(".month").find(".number").html(numberDown)
        }
    }

});

$( ".day .up" ).click(function(){
    let month = $(".month").find(".number").text();

    let number = $(this).closest(".day").find(".number").text();

    if (month == '01') {
        if (number < 31) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '02') {
        if (number < 28) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '03')  {
        if (number < 31) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '04')  {
        if (number < 30) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '05')  {
        if (number < 31) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '06')  {
        if (number < 30) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '07')  {
        if (number < 31) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '08')  {
        if (number < 31) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '09')  {
        if (number < 30) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '10')  {
        if (number < 31) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '11')  {
        if (number < 30) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    } else if (month == '12')  {
        if (number < 31) {
            let numberUP = (Number(number) + 1);
            if (number < 9) {
                $(this).closest(".day").find(".number").html('0' + numberUP)
            } else {
                $(this).closest(".day").find(".number").html(numberUP)
            }
        }
    }
});

$( ".day .down" ).click(function(){
    let number = $(this).closest(".day").find(".number").text();
    console.log(number);
    if (number > 1){
        let numberDown = (Number(number) - 1);
        if (number < 9) {
            $(this).closest(".day").find(".number").html('0' + numberDown)
        } else {
            $(this).closest(".day").find(".number").html(numberDown)
        }
    }

});

