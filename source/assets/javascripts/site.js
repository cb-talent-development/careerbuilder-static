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
      panel.hide()
      arrows.removeClass('arrow--up')
      arrows.addClass('arrow--down')
    }
    else {
      panel.slideDown(150)
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

jQuery(function(){
  console.log('site.js working');

  window.interact.watchMobileMenu();
  window.interact.watchApplyDiscount();
})
