'use strict';

var TRANSITION_EVENTS = 'transitionend ' +
    'webkitTransitionEnd oTransitionEnd ' +
    'otransitionend MSTransitionEnd';

function handleWave() {
    wiggleEars(90, 50, 206, .5, function () {
        wiggleEars(100, 40, 216, .5);
    });

    moveAntenna(1, .5, function () {
        moveAntenna(16, .5)
    });
}

function moveAntenna(deg, time, cb) {
    $('#reddit-alien .antenna').css({
        transition: time + 's',
        transform: 'rotate(' + deg + 'deg)'
    }).one(TRANSITION_EVENTS, cb || function () {});
}

function wiggleEars(top, left, right, time, cb) {
    $('#reddit-alien .ear.left').css({
        transition: time + 's',
        top: top,
        left: left
    });

    $('#reddit-alien .ear.right').css({
        transition: time + 's',
        top: top,
        left: right
    }).one(TRANSITION_EVENTS, cb || function () {});
}

initializeWebcamSwiper();

$('body')
    .bind('webcamSwipeLeft', handleWave)
    .bind('webcamSwipeRight', handleWave);
