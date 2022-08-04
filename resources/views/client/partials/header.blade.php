<header class="header">
    <div class="container">
        <div class="left">
            <a href="/" class="header_logo">
                <img width="300px" src="https://cdn.classic-trader.com/I/app/assets/r54504548/bundles/cltuiapp/images/logos/classic-trader-single-line-black.svg" alt="">
            </a>

            <form action="#" class="hc_search hc_search_hide" >
                <div class="hc_search">
                    <input type="text"  value="" name="address_header" id="autocomplete" class="form-control input-search" placeholder="Search">
                    <button type="submit" class="btn btn_search"> Search </button>
                </div>
            </form>
        </div>
        <div class="right">
            <nav class="header_nav">
                <ul>
                    <li><a href="#">Sign up</a></li>
                    <li><div class="header_login_link">Sign In
                            <div class="header_login_box">
                                <form id="loginForm" action="#" method="post">
                                    @csrf
                                    <div class="form-group">
                                        <label>Email{{-- or Phone Number--}}</label>
                                        <input type="text" class="form-control" name="email">
                                        <span data-field="email" class="invalid-feedback"></span>
                                    </div>
                                    <div class="form-group">
                                        <div class="label-group">
                                            <label>Password</label>
                                            <a href="#" class="edit-control">Forgot password?</a>
                                        </div>
                                        <input type="password" class="form-control" name="password">
                                        <span data-field="password" class="invalid-feedback"></span>
                                    </div>
                                    <div class="btn_wrpr">
                                        <button class="btn">Sign In</button>
                                        <div class="right_text">Don’t have account yet?<a href="#">Sign up</a></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </li>
                    <li><a href="#" >Help</a></li>
                </ul>
            </nav>
            <span class="mobile-notification-submenu">
            <a href="" class="mob_menu_btn">
                <span></span>
                <span></span>
                <span></span>
            </a>
            </span>
        </div>
    </div>
</header>
@push('scripts')
        <script>
        $(document).ready(function () {
            if(androidDesktopMode || iOSRequestDesktop) {
                $(".header_login_box").addClass("desktop_mode");
                $(".header_nav ul .sub-menu").addClass("desktop_mode");
                $(".mobile-notification-submenu").hide();

            }
        });
    </script>
@endpush
