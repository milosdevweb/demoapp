<footer class="main-footer <?php if(@Request::segment(1) == 'messages') echo 'messages' ?>">
    <div class="ft-bottom">
        <div class="container">
            <div class="copiright">© Classic Trader {{ date('Y') }}</div>
            <div class="right">
                <nav class="ft-nav">
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                    </ul>
                </nav>
                <ul class="social-items">

                        <li><a href="#" target="_blank"><?php include  public_path('client/img/insta-icon.svg'); ?></a></li>

                        <li><a href="#"><?php include  public_path('client/img/fb-icon.svg'); ?></a></li>

                        <li><a href="#"><?php include  public_path('client/img/tw-icon.svg'); ?></a></li>

                        <li><a href="#"><?php include  public_path('client/img/ytb-icon.svg'); ?></a></li>

                </ul>
            </div>
        </div>
    </div>
</footer>
