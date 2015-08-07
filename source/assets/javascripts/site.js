//= require_tree .
//= require_self

window.interact = {}

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

window.interact.watchMobileMenu = function() {

  mobileMenuLink = $('#mobile-menu-link');
  mobileMenu = $('#mobile-menu');
  mobileMenu.hidden = true;
  mobileMenu.hide();
  mobileMenu.removeClass('hidden');
  mobileMenuLink.click(function() { 
    mobileMenu.hidden = !mobileMenu.hidden
    if (mobileMenu.hidden == true) {
      mobileMenu.hide();
    }
    else {
      mobileMenu.show()
    };
  });
}; 

window.interact.modal = function(modalName, openLink) {
  
  openLinks = $('.' + openLink);
  closeLinks = $('.close-modal');
  modalBack = $('#modal-background');
  modalForm = $('#' + modalName); 
  // modals start with '.hidden' in HTML to prevent load order race between HTML/JS
  modalForm.hide();
  modalBack.hide();
  modalForm.removeClass('hidden');
  modalBack.removeClass('hidden');
  
  closeLinks.click(function() { 
    // binding to all close links; click on one modal hides all modals 
    modalForm.hide();
    modalBack.hide();
  });

  openLinks.click(function() { 
    // console.log("modal open: " + modalName);
    
    // required
    modalForm = $('#' + modalName); 
    // guards against showing background when modal not found 
    if (modalForm.length >= 1) {
      // modals can scroll, but located at the top of the page
      window.scrollTo(0, 0);
      modalBack.show();
      modalForm.show(); 
      }
    else {
      console.log("ERROR: link asked for a modal named #" + modalName + " but it wasn't found on the page.")  
    };
  });
}; 

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

window.interact.securityCodeHelper = function (target, payload) {
  var input, visa, mastercard, amex, discover
  
  visa = /^4[0-9]{6,}/
  mastercard = /^5[1-5][0-9]{5,}/
  amex = /^3[47][0-9]{5,}/
  discover = /^6(?:011|5[0-9]{2})[0-9]{3,}/

  $(payload).hide()
  $(payload).removeClass("hidden");

  $(target).keyup(function() {
    input = $(target).val()
    // remove whitespace chars
    input = input.replace(/\s+/g, '');
    input = input.replace(/-+/g, '');

    if (visa.test(input) || discover.test(input) || mastercard.test(input)) {
      $(payload + " #amex").hide();
      $(payload + " #visa").show();
      $(payload + " div").text("3 digit code on back of card.");
      $(payload).fadeIn("fast"); 
      }
    else if (amex.test(input)) {
      $(payload + " #amex").show();
      $(payload + " #visa").hide();
      $(payload + " div").text("4 digit code on front of card.");
      $(payload).fadeIn("fast"); 
      }
    else {
      $(payload).hide()
    };  
  });
};

jQuery(function(){
  console.log('site.js working');

  // modals must be added manually, this is a likely refactor if this gets hard
  // arguements are ( 'my-modal-id' , 'class-on-links-to-open' ) just like that.
  window.interact.modal('modal--email-us', 'modal-open--email-us')
  window.interact.modal('modal--change-billing-address', 'modal-open--change-billing-address')
  window.interact.modal('modal--change-company-address', 'modal-open--change-company-address')
  window.interact.watchMobileMenu();
  window.interact.watchApplyDiscount();
  window.interact.showOnFocus("#password-field", "#password-helper");
  window.interact.securityCodeHelper("#card-number-field", "#security-code-helper");

})
