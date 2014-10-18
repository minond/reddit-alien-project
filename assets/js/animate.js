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

/**
 * @param {Number} deg degrees to move antenna by
 * @param {Number} time transition time
 * @param {Function} cb transtion end callback
 * @return {jQuery} returns the jqueryfid antenna node
 */
function moveAntenna(deg, time, cb) {
    return $('#reddit-alien .antenna').css({
        transition: time + 's',
        transform: 'rotate(' + deg + 'deg)'
    }).one(TRANSITION_EVENTS, cb || function () {});
}

/**
 * @param {Number} top ear's y (top) axis movement
 * @param {Number} left left ear's x (left) axis movement
 * @param {Number} right right ear's x (left) axis movement
 * @param {Number} time transition time
 * @param {Function} cb transtion end callback
 * @return {jQuery} returns the jqueryfid ear nodes
 */
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

    return $('#reddit-alien .ear');
}

$(function () {
    initializeWebcamSwiper();

    $('body')
        .bind('webcamSwipeLeft', handleWave)
        .bind('webcamSwipeRight', handleWave);
});
