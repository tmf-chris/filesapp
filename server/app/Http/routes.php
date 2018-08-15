<?php

Route::group(['prefix' => 'api', 'middleware' => 'cors'], function () {
    Route::resource('files', 'FileController');
});
