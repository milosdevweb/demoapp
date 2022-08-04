@extends('layouts.client', ['body_append_class' =>  'pt_90'])
@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
@endsection
@section('content')
    @include('client.partials.header')
    <section class="s_room_page">
        <div class="container">
            <div class="room_galery">
                <div class="left">
                    <div class="room-slider-gallery">
                        @foreach($car->standardImages as $image)
                            <div class="slide-item">
                                <div class="room_galery_item big_item">
                                    <img src="{{$image->url}}" alt="">
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <a href="javascript:;" data-fancybox-trigger="gallery" class="expand">
                        <div class="icon"><?php include public_path("client/img/expand-icon.svg"); ?></div>
                        Expand
                    </a>
                </div>
                <div class="right">
                    <div class="room_galery_right_slider">
                        @foreach($car->standardImages as $image)
                            <div class="room_galery_item">
                                <img src="{{$image->url}}" alt="">
                            </div>
                        @endforeach
                    </div>
                    <div class="gallery_right_photo_gallery" style="display: none;" id="gallery_right_photo_gallery">
                        <div class="gallery_right_photo_gallery_body">
                            @foreach($car->standardImages as $image)
                                <div class="room_galery_item">
                                    <img src="{{$image->url}}" alt="">
                                </div>
                            @endforeach
                        </div>
                    </div>
                    <a href="" class="expand expand-all expand-all-right">
                        <div class="icon"><?php include public_path("client/img/expand-icon.svg"); ?></div>
                        Expand All
                    </a>
                </div>
                <div class="wrap_room">
                    <div class="room_galery_right_slider_mob">
                        @foreach($car->standardImages as $image)
                            <div class="room_galery_item">
                                <img src="{{$image->url}}" alt="">
                            </div>
                        @endforeach
                    </div>
                    <a href="" class="expand expand-all expand-all-right expand_all_hide">
                        <div class="icon"><?php include public_path("client/img/expand-icon.svg"); ?></div>
                        Expand All
                    </a>
                </div>

                <div class="gallery_hidden_photos">

                    @foreach($car->standardImages as $image)
                        <a data-fancybox="gallery" href="{{$image->url}}"
                           class="room_galery_item big_item gallery_big_photo_expand">
                            <img src="{{$image->url}}" alt="">
                        </a>
                    @endforeach
                </div>
            </div>
            <div class="room-page-content">

                <div class="room-page-content-inner">
                    <h3 class="top-name middle_title" style="padding-bottom: 10px;">{{ $car->car->make . ' ' . $car->car->model }}</h3>

                    <div class="brdr_box text-left room-description">
                        <h3 class="middle_title">Vehicle details</h3>
                        <div>
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <th align="left">
                                        Make
                                    </th>
                                    <td>
                                        {{ $car->car->make }}
                                    </td>
                                </tr>
                                <tr>
                                    <th align="left">
                                        Model
                                    </th>
                                    <td>
                                        {{ $car->car->model }}
                                    </td>
                                </tr>
                                <tr>
                                    <th align="left">
                                        Model name
                                    </th>
                                    <td>
                                        {{ $car->car->model }}
                                    </td>
                                </tr>
                                <tr>
                                    <th align="left">
                                        Series
                                    </th>
                                    <td>
                                        {{ $car->manufacturerCode }}
                                    </td>
                                </tr>
                                <tr>
                                    <th align="left">
                                        Year of manufacture
                                    </th>
                                    <td>
                                        {{ $car->yearOfProduction }}

                                    </td>
                                </tr>
                                <tr>
                                    <th align="left">
                                        Chassis number
                                    </th>
                                    <td>
                                        {{ $car->chassisNumber }}

                                    </td>
                                </tr>
                                <tr>
                                    <th align="left">
                                        Condition category
                                    </th>
                                    <td>
                                        {{ $car->stateCategory }}

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="brdr_box text-left room-description">
                        <h3 class="middle_title">Technical details</h3>
                        <div>
                    <table width="100%">
                        <tbody><tr>
                            <th align="left">
                                Body style
                            </th>
                            <td>
                                {{ $car->car->body }}
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Body detail
                            </th>
                            <td>
                                {{ $car->car->bodyDetailed }}
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Power (kw/hp)
                            </th>
                            <td>
                                {{ $car->horsepower }}

                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Cubic capacity (ccm)
                            </th>
                            <td>
                                {{ $car->cubicCapacity }}

                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Cylinders
                            </th>
                            <td>
                                {{ $car->cylinder }}
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Doors
                            </th>
                            <td>
                                {{ $car->doors }}
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Steering
                            </th>
                            <td>
                                Left (LHD)
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Transmission
                            </th>
                            <td>
                                {{ $car->gearbox }}
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Drive
                            </th>
                            <td>
                                4WD
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Front Brake
                            </th>
                            <td>
                                {{ $car->frontBrakes }}
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Rear Brake
                            </th>
                            <td>
                                {{ $car->rearBrakes }}
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                Fuel
                            </th>
                            <td>
                                {{ $car->fuel }}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                        </div>
                    </div>

                    <div class="brdr_box nobrdr_box">
                        <div class="brdr_wrap_left">
                            <div class="right btns_wrpr">
                                <a href="#" class="btn btn_brdr btn_w_icon share-button"><?php include public_path("client/img/icon_brdr_share.svg"); ?>
                                    Share</a>

                                    <a href="#" class="btn-like liked"
                                       data-id="{{ $car->id }}"
                                       data-action="favorites"> <?php include public_path("client/img/heart-icon.svg"); ?></a>

                                <ul  class="social-items share-list">
                                    <li><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u={{url()->current()}}"><?php include public_path("client/img/fb-icon.svg"); ?></a></li>
                                    <li><a target="_blank" href="https://twitter.com/intent/tweet?url={{url()->current()}}&text="><?php include public_path("client/img/tw-icon.svg"); ?></a></li>
                                </ul>
                            </div>

                        </div>
                        <div class="brdr_wrap_right">
                            <div class="contact-directly">
                                <div class="title">Direct Contact:</div>
                                <div class="icon-group">

                                    <a href="#" class="icon icon-message start-chat">
                                        <?php include public_path("client/img/fb_messenger_icon.svg"); ?>
                                        <strong>Chat</strong>
                                    </a>


                                    <a href="#phoneCall" rel="modal:open" class="icon icon-phone btn_room_event" data-toggle="modal">
                                        <?php include public_path("client/img/phone-icon.svg"); ?>
                                        <strong>Call</strong>
                                    </a>
                                </div>
                                <div class="box-green">
                                    <p>
                                        <span>Mention </span>
                                        <strong>{{$car->car->make . ' ' . $car->car->model}}</strong>
                                        <span class="box-host">on {{ request()->getHost() }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="wrapper_base_price">
                        <h3 class="middle_title">Condition & Registration</h3>
                        <div class="add_info_block">
                            <div class="cols_wrpr">

                                <div class="col">
                                    <ul class="list_icon_before">
                                        @if($car->fia)
                                            <li>
                                                <span class="icon"><?php include public_path("client/img/check-icon.svg"); ?></span> FIA
                                            </li>
                                        @endif
                                    </ul>
                                </div>
                                <div class="col">
                                    <ul class="list_icon_before">
                                        @if($car->licensed)
                                            <li>
                                                <span class="icon"><?php include public_path("client/img/check-icon.svg"); ?></span> Registered
                                            </li>
                                        @endif
                                    </ul>
                                </div>
                                <div class="col">
                                    <ul class="list_icon_before">
                                        @if($car->readyToRide)
                                            <li>
                                                <span class="icon"><?php include public_path("client/img/check-icon.svg"); ?></span> Ready to drive
                                            </li>
                                        @endif
                                    </ul>
                                </div>

                            </div>
                            <div class="cols_wrpr">

                            </div>
                        </div>
                    </div>

                    <div class="map-info">
                        <div class="left">
                            <h5 class="top-name">{{ $car->contact->companyName ??'' }}</h5>
                            <p>
                                {{$car->location->street}} <br>
                                {{$car->location->city}}, {{$car->location->countryCode }} {{$car->location->postalCode}}
                            </p>
                            <div class="rating_wrpr">
                                <ul data-id="{{$car->id}}" class="rating_stars">
                                    <li data-value='1' class="star active"></li>
                                    <li data-value='2' class="star active"></li>
                                    <li data-value='3' class="star active"></li>
                                    <li data-value='4' class="star active"></li>
                                    <li data-value='5' class="star active"></li>
                                </ul>
                                <div class="middle_star">5/100</div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="map-placeholder" >

                                <div id="map" style="width: 314px; height: 180px"></div>

                            </div>
                        </div>
                    </div>

                    <div class="brdr_box text-left room-description">
                        <h3 class="middle_title">Description</h3>
                        <div class="more">{!! $car->description->en_GB !!}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="modal" id="phoneCall" style="text-align: center !important;padding-right: 0 !important;">
        <h4 class="modal-title">Please call us at:</h4>
        <h4 class="modal-title">+49 30 437 75 19 20</h4>
        <!-- /.modal-dialog -->
    </div>
    <div class="modal" id="smsSend" style="text-align: center !important;padding-right: 0 !important;">
        <h4 class="modal-title">Please text us at:</h4>
        <h4 class="modal-title">+49 30 437 75 19 20</h4>
        <!-- /.modal-dialog -->
    </div>
@endsection
@section('js')
    <script>
        var $ = jQuery.noConflict();
        $(document).ready(function() {
            // Configure/customize these variables.
            var showChar = 100;  // How many characters are shown by default
            var ellipsestext = "...";
            var moretext = "Show more >";
            var lesstext = "Show less";


            $('.more').each(function() {
                var content = $(this).html();

                var c = $(this).find('p:first').text();

                var h = content;

                var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><div class="morecontent"><div>' + h + '</div>&nbsp;&nbsp;</div><a href="" class="morelink">' + moretext + '</a>';

                $(this).html(html);


            });

            $(".morelink").click(function(){
                $(".moreellipses").remove();
                if($(this).hasClass("less")) {
                    $(this).removeClass("less");
                    $(this).html(moretext);
                } else {
                    $(this).addClass("less");
                    $(this).html(lesstext);
                }
                $(this).parent().prev().toggle();
                $(this).prev().toggle();
                return false;
            });
        });


        var lat = 59.345258367735376;
        var lng = 17.94908912743431

        $(document).ready(function () {
            google.maps.event.addDomListener(window, 'load', initMap);
        });

        function initMap() {
            var positionCar = {
                lat: lat,
                lng: lng
            };
            var map = new google.maps.Map(
                document.getElementById('map'), {
                    zoom: 12,
                    center: positionCar,
                    styles: [{
                        "featureType": "administrative.country",
                        "elementType": "geometry",
                        "stylers": [{
                            "visibility": "simplified"
                        },
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    }]
                });
            var marker = new google.maps.Marker({
                position: positionCar,
                map: map,
            });
        }

    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAske2Q1_Wsl8jKMoBBZLEomWA78x_2mzk&callback=initMap&language=en-GB" async defer></script>
@endsection
