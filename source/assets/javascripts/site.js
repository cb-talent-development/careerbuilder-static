//= require_tree .
//= require_self

jQuery(function(){
  console.log('site.js working');

  mobileMenuLink = document.getElementById('mobile-menu-link');
  mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.hidden = true

  mobileMenuLink.onclick = function() { 
    mobileMenu.hidden = !mobileMenu.hidden

    if (mobileMenu.hidden == true) {
      $(mobileMenu).addClass('hidden')
    }
    else {
      $(mobileMenu).removeClass('hidden')
    }
  }

})