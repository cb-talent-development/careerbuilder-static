//= require_tree ./interactions
//= require_self

'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

jQuery(function(){
  console.log('site.js working');

  // modals must be added manually, this is a likely refactor if this gets hard
  // arguements are ( 'my-modal-id' , 'class-on-links-to-open' ) just like that.
  window.interact.modal('modal--email-us', 'modal-open--email-us');
  window.interact.modal('modal--change-billing-address', 'modal-open--change-billing-address');
  window.interact.modal('modal--change-company-address', 'modal-open--change-company-address');

  window.interact.watchMobileMenu();

  window.interact.watchApplyDiscount();

  window.interact.showOnFocus("#password-field", "#password-helper");

  window.interact.securityCodeHelper("#card-number-field", "#security-code-helper");

  window.interact.smoothScroll(".product-subnav a[href*=#]:not([href=#])");
});