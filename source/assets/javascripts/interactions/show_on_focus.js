/*
* @Author: Manske
* @Date:   2015-08-12 11:23:22
* @Last Modified by:   Manske
* @Last Modified time: 2015-08-12 11:27:25
*/

'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.showOnFocus = function (target,payload) {
  $(payload).hide();
  $(payload).removeClass("hidden");

  $(target).focus(function() {
    $(payload).fadeIn("fast");
  });

  $(target).blur(function() {
    $(payload).hide();
  });
};
