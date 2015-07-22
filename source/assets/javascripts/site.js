//= require_tree .
//= require_self

window.interact = {}

window.interact.watchApplyDiscount = function() {

  panel = $('#apply-discount')
  links = $('.cart__apply-discount-link')
  panel.hidden = true;
  panel.hide();
  links.click( function() {
    panel.hidden = !panel.hidden
    if (panel.hidden == true) {
      panel.hide()
    }
    else {
      panel.slideDown(150)
    }
  });
};

window.interact.watchMobileMenu = function() {

  mobileMenuLink = $('#mobile-menu-link');
  mobileMenu = $('#mobile-menu');
  mobileMenu.hidden = true;
  mobileMenu.hide();
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

jQuery(function(){
  console.log('site.js working');

  window.interact.watchMobileMenu();
  window.interact.watchApplyDiscount();
})
