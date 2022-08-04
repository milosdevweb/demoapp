$(window).on("load", function () {

    $(".room-slider-gallery").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<a href="#" class="slider-arrow arrow-prev"></a>',
        nextArrow: '<a href="#" class="slider-arrow arrow-next"></a>',
        dots: false
    });

});

$(function () {

    if ($('#zdrop').length) {

        var previewNode = document.querySelector("#zdrop-template");
        previewNode.id = "";
        var previewTemplate = previewNode.parentNode.innerHTML;
        previewNode.parentNode.removeChild(previewNode);

        $("#zdrop").dropzone({
            url: 'upload.php',
            maxFiles: 1,
            maxFilesize: 30,
            thumbnailWidth: 188,
            thumbnailHeight: 188,
            previewTemplate: previewTemplate,
            previewsContainer: "#previews",
            clickable: "#upload-label",
            init: function () {
                // Create and Display Mock File
                var mockFile = {
                    name: "avatar1.jpg",
                    size: 30,
                    url: 'img/s-photo.jpg'
                };
                this.options.addedfile.call(this, mockFile);
                this.options.thumbnail.call(this, mockFile, mockFile.url);

                // Register it
                this.files = [mockFile];
                this.on('success', function () {
                    if (this.files.length > 1) {
                        this.removeFile(this.files[0]);
                    }
                });

                this.on("maxfilesexceeded", function (file) {
                    this.removeAllFiles();
                    this.addFile(file);
                })
            }
        });
    }

    $(".edit-control").on("click", function () {
        const currentSetting = $(this).closest(".setting-item");
        let flag = false;
        if ($(this).text() === "Save") {
            flag = true;
            if(!$(this).hasClass('dontChangeMe')){
                $(this).text("Edit");
            }
            currentSetting.find(".fileuploader .wrap_upload").addClass("disabled");
        } else {
            if(!$(this).hasClass('dontChangeMe')){
                $(this).text("Save");
            }
            currentSetting.find(".fileuploader .wrap_upload").removeClass("disabled");
        }
        currentSetting.find("input").prop("disabled", flag);
    });


    $(".verify-new-email").on("click", function (e) {
        const $this = $(this).closest(".window");
        const newEmail = $this.find(".new-email").val();
        const retypeNewEmail = $this.find(".retype-new-email").val();
        console.log(newEmail);
        console.log(retypeNewEmail);
        if (!newEmail.length || !retypeNewEmail.length || newEmail !== retypeNewEmail) {
            e.preventDefault();
            alert('Email spelling doesn’t match');
        } else {
            $.fancybox.close()
            return true
        }
    });

    // $(".save-login-email").on("click", function () {
    //     const $this = $(this).closest(".window");
    //     const newEmail = $this.find(".new-email").val();
    //     const retypeNewEmail = $this.find(".retype-new-email").val();
    //     console.log(newEmail);
    //     console.log(retypeNewEmail);
    //     if (newEmail.length && retypeNewEmail.length) {
    //         if (newEmail === retypeNewEmail) {
    //             $(".form-control.login-email").val(newEmail);
    //             $this.find(".error-message").removeClass("show").addClass("hide");
    //             $.fancybox.close();
    //         } else {
    //             $this.find(".error-message").removeClass("hide").addClass("show");
    //         }
    //     }
    // });

    $(".edit-control-item").on("click", function () {
        const currentItem = $(this).closest(".form-group");
        let flag = false;
        if ($(this).text() === "Save") {
            flag = true;
            $(this).text("Edit");
        } else {
            $(this).text("Save");
        }
        currentItem.find("input").prop("disabled", flag);
    });

    if ($(".card-number").length) {
        $(".card-number").mask("9999 9999 9999 9999");
    }

    if ($(".card-expires").length) {
        $(".card-expires").mask("99/99");
    }

    if ($(".phone-number").length) {
        $(".phone-number").click(function(){
            if(!$(this).val().replace(/[^+\d]/g, '')){
                $(this).setCursorPosition(1);
            }
        }).mask("(999) 999-9999");
    }

    if ($(".card-ccv").length) {
        $(".card-ccv").mask("999");
    }

    $(".room-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<a href="#" class="slider-arrow arrow-prev"></a>',
        nextArrow: '<a href="#" class="slider-arrow arrow-next"></a>',
        dots: true,
        customPaging: function (slider, i) {
            return '<span class="slider-dot"></span>';
        }
    });

    $(".room-slider-custom").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<span class="slider-dot"></span>';
        }
    });

    $(".tab-item").on("click", function () {
        const idx = $(this).index();

        $(".tab-content-item").removeClass("active");
        $(".tab-item").removeClass("active");
        $(this).addClass("active");
        $(".tab-content-item").eq(idx).addClass("active");
    });

    $(".accordion-title").on("click", function () {
        const accordionContent = $(this).closest(".accordion-item").find(".accordion-content");
        const accordionItem = $(this).closest(".accordion-item");
        if (accordionItem.hasClass("active")) {
            accordionItem.removeClass("active");
            accordionContent.slideUp(300);
        } else {
            $(".accordion-item").removeClass("active");
            $(".accordion-content").slideUp(300);
            accordionItem.addClass("active");
            accordionContent.slideDown(300);
        }

    });

    if ($(".datepicker").length) {
        $(".datepicker").datepicker();
    }

    var stepsSlider = document.getElementById('steps-slider');

    if (stepsSlider) {
        noUiSlider.create(stepsSlider, {
            start: [0, 10000],
            connect: true,
            tooltips: false,
            format: wNumb({
                decimals: 0,
                suffix: '$'
            }),
            range: {
                'min': 0,
                'max': 10000
            }
        });

        var input0 = document.getElementById('input-with-keypress-0');
        var input1 = document.getElementById('input-with-keypress-1');
        var inputs = [input0, input1];

        stepsSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });

        inputs.forEach(function (input, handle) {
            input.addEventListener('change', function () {
                stepsSlider.noUiSlider.setHandle(handle, this.value);
            });
        });
    }


    $(".pay-action").on("click", function () {
        $(".action-lists").removeClass("active");
        $(this).parent().find(".action-lists").toggleClass("active");
    });

    $(document).on("mouseup", function (e) {
        var target = e.target;
        var toolsDropMenu = $(".action-lists");

        if (!toolsDropMenu.is(target) && toolsDropMenu.has(target).length === 0) {
            toolsDropMenu.removeClass("active");
        }
    });

    $(document).on("click", '.room-check', function () {

        let selectedItems = [];

        $(".room-items .card-room").each(function (indx, element) {
            if ($(element).find(".room-check").is(":checked")) {
                const roomTitle = $(element).find(".top-name").text();
                const roomImagePath = $(element).find(".room-slider .img-wrap:first-child img").attr("src");
                let compareItem = $(".append .compare-item");
                compareItem.find(".compare-item-img img").attr("src", roomImagePath);
                compareItem.find(".compare-item-name").text(roomTitle);
                compareItem.attr("data-room_id", $(element).data("id"));
                selectedItems.push(compareItem[0].outerHTML);
            }
        });

        if (selectedItems.length === 4) {
            $(".room-items").addClass("max-items");
            $(".room-items .card-room").each(function (indx, element) {
                if (!($(element).find(".room-check").is(":checked"))) {
                    $(element).find(".room-check").prop("disabled", true);
                }
            })
        } else {
            $(".room-items").removeClass("max-items");
            $(".card-room .room-check").prop("disabled", false);
        }

        $(".s-compare-assisted .compare-items").children().remove();
        $(".s-compare-assisted .compare-items").append(selectedItems);

        if ($(this).is(":checked")) {
            $(this).closest(".card-room").addClass("active");

        } else {
            $(this).closest(".card-room").removeClass("active");
        }

        if ($(".room-check").is(":checked")) {
            $(".s-compare-assisted").addClass("show");
        } else {
            $(".s-compare-assisted").removeClass("show");
        }

        checkSelectedItem();

    });


    function checkSelectedItem() {
        if ($(".s-favorites .room-check").is(":checked")) {
            $(".s-favorites .title-status").addClass("active");
            let count = calcRoomCheckCount();
            $(".s-title.selected-count .count").text(count);
        } else {
            $(".s-favorites .title-status").removeClass("active");
        }
    }


    $(document).on("click", ".compare-item-close", function () {
        const compareItem = $(this).closest(".compare-item");
        const compareIdx = compareItem.index();
        compareItem.remove();
        $(".room-items .card-room.active").eq(compareIdx).removeClass("active").find(".room-check").prop("checked", false);
        if ($(".compare-items").children().length === 0) {
            $(".s-compare-assisted").removeClass("show");
        }
        if ($(".compare-items").children().length < 4) {
            $(".card-room .room-check").prop("disabled", false);
            $(".room-items").removeClass("max-items");
        }
        checkSelectedItem();
    });

    $(document).on("click", '.compare-item-remove-all', function () {
        $(".compare-box .compare-item").remove();
        $(".card-room").removeClass("active");
        $(".card-room .room-check").prop("checked", false).prop("disabled", false);
        $(".room-items").removeClass("max-items");
        $(".s-compare-assisted").removeClass("show");
        checkSelectedItem();
    });

    $(".compare-toggle").on("click", function () {
        $(".s-compare-assisted").toggleClass("active");
    });

    function calcRoomCheckCount() {
        let count = 0;
        $(".s-favorites .room-check").each(function () {
            if ($(this).is(":checked")) {
                count++;
            }
        });

        return count;
    }


    window.onload = function () {
        var tableCont = document.querySelector("#fixed-head tbody")

        function scrollHandle(e) {
            var scrollTop = this.scrollTop;
            if (scrollTop > 0) {
                document.querySelector("#fixed-head").classList.add("head-active");
            } else {
                document.querySelector("#fixed-head").classList.remove("head-active");
            }
        }

        if (tableCont) {
            tableCont.addEventListener("scroll", scrollHandle)
        }
    }


    $(".compare-btn").on("click", function (e) {
        e.preventDefault();
        /*
        $(".s-compare").addClass("active");
        $(".s-favorites, .s-discover").removeClass("active");
        $(".s-compare-assisted").removeClass("show");
        */

        let items = [];
        let url = $(this).data("action");
        let payment_source = $('input[name="payment_source"]:checked').val();

        $(".compare-items .compare-item").each(function (indx, element) {
            items.push($(element).data("room_id"));
        });

        $.ajax({
            url: url,
            type: "get",
            data: {
                items: items,
                payment_source: payment_source,
            },
            success: function (data) {
                $(".s-compare").empty().html(data);
                $(".s-compare").addClass("active");
                $(".s-favorites, .s-discover").removeClass("active");
                $(".s-compare-assisted").removeClass("show");
            },
        });
    });

    $(document).on("click", '.back-to-favorite', function (e) {
        e.preventDefault();
        $(".s-compare").removeClass("active");
        $(".s-favorites, .s-discover").addClass("active");
    });

    if ($(".datepicker").length) {
        $(".datepicker").datepicker();
    }

    $('.contact-link').click(function (e) {
        e.preventDefault();
        $('.find_your_answer').hide();
        $('.s-bottom-answer').show();
    });

    var scrollTop = 0;
    var filter = $('.checkbox-filter:not(.filter_2)');
    var filter2 = $('.checkbox-filter.filter_2');
    if (filter.length || filter2.length) {
        $(window).scroll(function (e) {
            scrollTop = window.pageYOffset;
            filter.css('top', 20 + scrollTop + 'px');
            filter2.css('top', scrollTop - 100 + 'px');
        });
    }

    $('.btn-like').click(function (e) {
        // e.preventDefault();
        $(this).toggleClass('liked');

    });

    $('.share-button').click(function (e) {
        e.preventDefault();
        $('.share-list').toggleClass('active');
    });

    /*
    $('.card-room .bottom-info .actions .action-item.fav_btn').on("click", function () {
        $(this).toggleClass('active_fav');
    });
    */

    $(document).on("click", '[data-action="favorites"]', function (e) {
        e.preventDefault();

        let _this = $(this);
        let id = _this.attr("data-id");

        $.post(
            "/rooms/" + id + "/favorites",
            { _token: $('meta[name="csrf-token"]').attr("content") },
            function (data, status) {
                if (status === "success") {
                    _this.toggleClass("active_fav");
                }
            }
        );
    });

    $(".header_login_link").click(function () {
        $(".header_login_box").css("visibility", "visible");
        $(".header_login_box").css("opacity", "1");
    });

    $(document).mouseup(function (e) {
        let div = $(".header_login_box");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.css("visibility", "hidden");
            div.css("opacity", "0");
        }
    });
});
