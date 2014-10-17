'use strict';

function wave() {
    console.log('waving...');
}

$(function () {
    $('body')
        .bind('webcamSwipeLeft', wave)
        .bind('webcamSwipeRight', wave);
});

$(initializeWebcamSwiper);
