<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <title>{{ env('APP_NAME', 'Classic Trader') }}</title>

    <meta name="description" content="Classic Trader">

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="Classic Trader">

    <!-- Open Graph data -->
    <meta property="og:title" content="Classic Trader" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta property="og:description" content="Classic Trader" />

    <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon"/>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    {{--@csrf--}}
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <style>
        .room-slider-gallery > .slide-item:not(:first-child) {
              display: none;
          }
    </style>


    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <link rel="stylesheet" href="{{ asset('client/assets/nouislider/nouislider.min.css') }}">
    <link rel="stylesheet" href="{{ asset('client/assets/ajax-loader/ajax-loader.css') }}">
    <link rel="stylesheet" href="{{ asset('client/assets/air-datepicker/datepicker.css') }}">
    <link rel="stylesheet" href="{{ asset('client/assets/autocomplete/jquery.auto-complete.css') }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />

    @stack('styles')

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="{{ asset('client/css/fonts.css')}}">
    <link rel="stylesheet" href="{{ asset('client/css/greed.css')}}">
    <link rel="stylesheet" href="{{ asset('client/css/reset.css')}}">
    <link rel="stylesheet" href="{{ asset('client/css/main.css')}}">
    <link rel="stylesheet" href="{{ asset('client/css/custom.css')}}">
    <link rel="stylesheet" href="{{ asset('client/css/media_custom.css')}}">
    <link rel="stylesheet" href="{{ asset('client/css/media.css')}}">
    @yield('css')
</head>
<body>

@yield('content')

@include('client.partials.footer')

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>
<script src="{{ asset('client/assets/jquery/jquery.min.js')}}"></script>
<script src="{{ asset('client/assets/jquery.maskedinput.min.js')}}"></script>
<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<script src="{{ asset('client/assets/nouislider/nouislider.min.js')}}"></script>
<script src="{{ asset('client/assets/nouislider/wNumb.js')}}"></script>
<script src="{{ asset('client/assets/ajax-loader/ajax-loader.js')}}"></script>
<script src="{{ asset('client/assets/autocomplete/jquery.auto-complete.min.js')}}"></script>

<script src="{{ asset('client/js/main.js')}}"></script>
<script src="{{ asset('client/js/common.js')}}"></script>
<script src="{{ asset('client/js/common_anton.js')}}"></script>
<script src="{{ asset('client/js/auth.js')}}"></script>
<script src="{{ asset('client/js/tinyAgo.min.js')}}"></script>
<script src="{{ asset('client/js/jquery.slimscroll.min.js')}}"></script>
<script src="{{ asset('client/js/jquery.cookie.js')}}"></script>

<script>
    var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.appVersion)[1], 10); // also matches AppleWebKit
    var isGoogle = webkitVer && navigator.vendor.indexOf('Google') === 0;  // Also true for Opera Mobile and maybe others
    var isAndroid = isGoogle && navigator.userAgent.indexOf('Android') > 0;  // Careful - Firefox and Windows Mobile also have Android in user agent
    var androidDesktopMode = !isAndroid && isGoogle && (navigator.platform.indexOf('Linux a') === 0) && 'ontouchstart' in document.documentElement;

    var iOSAgent = window.navigator.userAgent.match(/iPhone|iPod|iPad/);
    var iOSPlatform = window.navigator.platform && window.navigator.platform.match(/iPhone|iPod|iPad/);
    var iOSRequestDesktop = (!iOSAgent && iOSPlatform);

    console.log('androidDesktopMode: ' + androidDesktopMode);
    console.log('iOSRequestDesktop: ' + iOSRequestDesktop);

    if(androidDesktopMode || iOSRequestDesktop) {
        document.body.classList.add('desktop-mode-on-mobile');
        document.head.querySelector('meta[name="viewport"]').content="width=1440, initial-scale=0.5, maximum-scale=5.0, user-scalable=yes";
        $(".close_message_btn").html("Back");
    }
</script>

@stack('scripts')
@yield('js')

</body>

</html>

