<?php
    $data = array(
		'to' => 'xx.xx@gmail.com',
		'judul' => 'test kirim email',
		'isi'=> 'test kirim email dari API Google Apps Script',
    );

    $url = 'https://script.google.com/macros/s/xxxx/exec';
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
    $response = curl_exec($curl);
    echo $response;
    curl_close($curl);
?>
