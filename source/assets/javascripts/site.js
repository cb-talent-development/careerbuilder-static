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
  
  openLinks = $('.' + openLink)
  closeLinks = $('.close-modal');
  modal = {}
  modal.back = $('#modal-background')
  modal.form = $('#' + modalName), 
  modal.hidden = true;
  modal.form.hide();
  modal.back.hide();
  modal.form.removeClass('hidden');
  modal.back.removeClass('hidden');
  
  closeLinks.click(function() { 
    // console.log("modal close: " + modalName)
    modal.hidden = true
    modal.form.hide();
    modal.back.hide();
  });

  openLinks.click(function() { 
    // console.log("modal open: " + modalName)
    modal.hidden = false

    // guards against showing background when modal not found 
    if (modal.form.length >= 1) {
      modal.back.show();
      modal.form.show(); 
      }
    else {
      console.log("ERROR: you asked for a modal named #" + modalName + " but it wasn't found on the page.")  
    };
  });
}; 

jQuery(function(){
  console.log('site.js working');

  // modals must be added manually, this is a likely refactor if this gets hard
  window.interact.modal('modal--change-billing-address', 'modal-open--change-billing-address')
  window.interact.modal('modal--change-company-address', 'modal-open--change-company-address')
  window.interact.watchMobileMenu();
  window.interact.watchApplyDiscount();
})
