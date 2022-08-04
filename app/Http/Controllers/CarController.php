<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCarRequest;
use App\Http\Requests\UpdateCarRequest;
use App\Models\Car;

class CarController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function show($carId)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://www.classic-trader.com/api/vehicle-ad/' . $carId . '.json',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
                'Accept: */*',
                'Cookie: AWSELB=59B19B1089CC5BAB697BA3D8123C3E870F8A68244F0ED16DB228BB5E960EFCABD43B55CA151A58C99FFC8A4B119E2EC85D325AECCF7E076E43E00E0CF09E715CAF58D3D0; AWSELBCORS=59B19B1089CC5BAB697BA3D8123C3E870F8A68244F0ED16DB228BB5E960EFCABD43B55CA151A58C99FFC8A4B119E2EC85D325AECCF7E076E43E00E0CF09E715CAF58D3D0'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        //echo $response;
        //die;

        $result = json_decode($response);

        //dd($result->data);

        $car = $result->data;

        return view('car.show',compact('car'));
    }
}
