@extends('layouts.client', ['body_append_class' =>  'pt_90'])
@section('content')
    @include('client.partials.header')
    <style>
        .details-page {
            color: #11ca7d;
        }
        .details-page:hover {
            color: #0e412b;
        }
        .home_page .last {
            margin-bottom: 40vh;
        }

    </style>
    <section class="home_page">
        <div class="container">
            <div class="room-page-content" style="margin-top: 10rem">

                <div class="room-page-content-inner">
                    <div class="row">Welcome to Classic Trader demo app page</div>
                    <div class="row">Please visit the link below</div>
                    <div class="row last"><a class="details-page" href="<?php url('/') ?>/car/276046">BMW model details</a></div>
                </div>
            </div>
        </div>
    </section>
@endsection

