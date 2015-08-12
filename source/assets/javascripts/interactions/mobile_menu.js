/*
* @Author: Manske
* @Date:   2015-08-12 11:23:05
* @Last Modified by:   Manske
* @Last Modified time: 2015-08-12 11:41:29
*/

'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.watchMobileMenu = function() {

  var mobileMenuLink = $('#mobile-menu-link');
  var mobileMenu     = $('#mobile-menu');

  mobileMenu.hidden = true;
  mobileMenu.hide();
  mobileMenu.removeClass('hidden');

  mobileMenuLink.click(function() {
    mobileMenu.hidden = !mobileMenu.hidden;
    if (mobileMenu.hidden == true) {
      mobileMenu.hide();
    }
    else {
      mobileMenu.show()
    };
  });
};