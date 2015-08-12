/*
* @Author: Manske
* @Date:   2015-08-12 11:14:25
* @Last Modified by:   Manske
* @Last Modified time: 2015-08-12 11:27:25
*/

'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.watchApplyDiscount = function() {
  panel = $('#apply-discount')
  links = $('.cart__apply-discount-link')
  arrows = $('.promo-code-arrow')
  panel.hidden = true;
  panel.hide();
  panel.removeClass('hidden');
  links.click( function() {
    panel.hidden = !panel.hidden
    if (panel.hidden == true) {
      panel.slideUp("fast")
      arrows.removeClass('arrow--up')
      arrows.addClass('arrow--down')
    }
    else {
      panel.slideDown("fast")
      arrows.removeClass('arrow--down')
      arrows.addClass('arrow--up')
    }
  });
};