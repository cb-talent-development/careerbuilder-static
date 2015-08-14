/**
* Simple carousel for images/copy w/ clickable state dots
*
* @method simpleCarousel
* @param {String} animatedTargets - jQuery element selection string for objects to be animated
* @param {string} dotTargets - jQuery element selection string for state change dots
*/

'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.simpleCarousel = function (animatedTargets, dotTargets) {

  var carouselDots     = $(dotTargets);
  var carouselObjects  = $(animatedTargets);

  var duration         = 500;
  var pauseTiming      = 5000;
  var isAnimating      = false;
  var totalStates      = (carouselDots.length - 1);
  var animationTimeout = null;

  var currentState     = 0;
  var nextStateRight   = 1;
  var nextStateLeft    = totalStates;

  /**
  * Animates items into the next state
  *
  * @method animateNextState
  * @param {String} direction - direction of movement ('left or 'right')
  * @param {Int} nextState - index of incoming state
  */

  var animateNextState = function(direction, nextState){
    preventOverflow();
    // resetAutomaticInterval();

    shiftTo(direction);
    shiftFrom(direction, nextState);
    setupStates(nextState);
    updateDots(nextState);
  }

  /**
  * Protects against rapid-fire click events for cleaner animations
  *
  * @method preventOverflow
  */

  var preventOverflow = function(){
    isAnimating = true;

    setTimeout(function(){
      isAnimating = false;
    }, (duration + 10));
  }

  /**
  * Resets automatic state change interval
  *
  * @method resetAutomaticInterval
  */

  var resetAutomaticInterval = function(){
    clearTimeout(animationTimeout);

    animationTimeout = setTimeout(function(){
      animateNextState('right', nextStateRight);
    }, pauseTiming);
  }

  /**
  * Shifts current items out of view
  *
  * @method shiftTo
  * @param {String} direction - direction of movement ('left or 'right')
  */

  var shiftTo = function(direction){
    var objBlock   = carouselObjects.eq(currentState);
    var marginLeft = ('left' == direction) ? '100%' : '-100%';

    objBlock.animate({marginLeft: marginLeft, opacity: 0}, duration, function(){
      $(this).addClass('hidden').removeClass('active').removeAttr('style');
    });
  }

  /**
  * Shifts next items into view
  *
  * @method shiftTo
  * @param {String} direction - direction of movement ('left or 'right')
  * @param {Int} nextState - index of incoming state
  */

  var shiftFrom = function(direction, nextState){
    var objBlock   = carouselObjects.eq(nextState);
    var marginLeft = ('left' == direction) ? '-100%' : '100%';

    objBlock.css({marginLeft: marginLeft, opacity: 0}).addClass('active').removeClass('hidden');
    objBlock.animate({marginLeft: 0, opacity: 1}, duration, function(){
      $(this).removeAttr('style');
    });
  }

  /**
  * Calculates next states based upon current transition
  *
  * @method setupStates
  * @param {Int} nextState - new state to calculate from
  */

  var setupStates = function(nextState){
    currentState   = nextState;
    nextStateLeft  = (0 == nextState) ? totalStates : (nextState - 1);
    nextStateRight = (totalStates == nextState) ? 0 : (nextState + 1);
  };

  /**
  * Update dot styling to match current state
  *
  * @method updateDots
  * @param {Int} nextState - new state to calculate from
  */

  var updateDots = function(nextState){
    carouselDots.eq(nextState).addClass('active');
    carouselDots.not(':eq(' + nextState + ')').removeClass('active');
  }

  /**
  * Dot click events
  */

  carouselDots.on('click touchend', function(evt){
    evt.preventDefault();
    if (isAnimating || $(this).hasClass('active')){ return false; }

    var dotState = $(this).index();
    var direction = (dotState < currentState) ? 'left' : 'right';

    animateNextState(direction, dotState);
  });

  /**
  * Initiate timing state changes
  */

  // animationTimeout = setTimeout(function(){
  //   animateNextState('right', nextStateRight);
  // }, pauseTiming);
};
