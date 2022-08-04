var $ = jQuery.noConflict();
$(document).ready(function () {



    $(".search_step_1")
        .find("button")
        .click(function (e) {
            e.preventDefault();

            $(".search_step_1").hide();
            $(".search_step_2").show();
        });

    $(".search_step_2")
        .find(".search_btn")
        .click(function (e) {
            e.preventDefault();

            let search_value = $(".search_step_1").find("input").val();
            let payment_source = $(".search_step_2").find('input[name="payment_source"]:checked').val();
            let type_livings = "";
            $(".type_livings:checked")
                .map(function () {
                    return (type_livings += "&living_type[]=" + $(this).val());
                })
                .get();
            let url = $('.form_search').attr('action');
            if(type_livings == '' || payment_source == 'undefined') {
                alert('Please select both search options');
                return;
            }
            if(!$('input.terms_check').is(':checked')) {
                $(".terms-conditions-error-msg").show();
                return;
            }

            let link = url + "?address=" + search_value + type_livings ;

            if (payment_source !== undefined ) {
                link += "&payment_source=" + payment_source
            }
            if ("geolocation" in navigator){ //check geolocation available

                //try to get user current location using getCurrentPosition() method
                navigator.geolocation.getCurrentPosition(function(position){

                    var userLat = position.coords.latitude;
                    var userLng = position.coords.longitude;

                    console.log("User lat " + userLat);
                    console.log("User long " + userLng);

                    //listCampaignsPagination(page,params + '&userLat=' + userLat + '&userLng=' + userLng);
                    link += "&sort=nearest&userLat=" + userLat + "&userLng=" + userLng + "&radius=50";
                    goToPage(link);

                }, function (error) {


                    if (error.code == error.PERMISSION_DENIED) {
                        console.log('position.PERMISSION_DENIED');
                        goToPage(link);
                    }

                });

            }else{
                console.log("Browser doesn't support geolocation!");
                goToPage(link);
            }
            //alert("Link " + link);
            //window.location.href = link;
        });

    function goToPage(link) {
        window.location.href = link;
    }

    $(document).on('click', '.btn_search', function(e){
        e.preventDefault();
        let res = $(".hc_search").find("input").val();
        console.log('.hc_search res: ', res);

        if(res.length){
            $('.hc_search').submit();
        }else{
            Swal.fire('Error!', 'Please, enter address.', 'error').then(function () {

            });
        }
    });


});

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

if ($(window).width() < '992') {
    $(".menu li > a").click(function() {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active");
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        // var arrow = link.find(".order-menu__icon");
        var count = 0;

        closest_ul.find(".sub-menu").slideUp(200, function() {
            if (++count == closest_ul.find(".sub-menu").length) {
                parallel_active_links.removeClass("active")
            };
        });

        if (!link_status) {
            closest_li.children(".sub-menu").slideDown(200);
            closest_li.addClass("active");
            //   arrow.addClass("active");
        }
    });

}
