"use strict";"undefined"==typeof window.interact&&(window.interact={}),window.interact.watchApplyDiscount=function(){var e=$("#apply-discount"),n=$(".cart__apply-discount-link"),i=$(".promo-code-arrow");e.hidden=!0,e.hide(),e.removeClass("hidden"),n.click(function(){e.hidden=!e.hidden,1==e.hidden?(e.slideUp("fast"),i.removeClass("arrow--up"),i.addClass("arrow--down")):(e.slideDown("fast"),i.removeClass("arrow--down"),i.addClass("arrow--up"))})},"undefined"==typeof window.interact&&(window.interact={}),window.interact.watchMobileMenu=function(){var e=$("#mobile-menu-link"),n=$("#mobile-menu");n.hidden=!0,n.hide(),n.removeClass("hidden"),e.click(function(){n.hidden=!n.hidden,1==n.hidden?n.hide():n.show()})},"undefined"==typeof window.interact&&(window.interact={}),window.interact.modal=function(e,n){var i=$("."+n),o=$(".close-modal"),t=$("#modal-background"),d=$("#"+e);d.hide(),t.hide(),d.removeClass("hidden"),t.removeClass("hidden"),o.click(function(){d.hide(),t.hide()}),i.click(function(){d=$("#"+e),d.length>=1?(window.scrollTo(0,0),t.show(),d.show()):console.log("ERROR: link asked for a modal named #"+e+" but it wasn't found on the page.")})},"undefined"==typeof window.interact&&(window.interact={}),window.interact.securityCodeHelper=function(e,n){var i=/^4[0-9]{6,}/,o=/^5[1-5][0-9]{5,}/,t=/^3[47][0-9]{5,}/,d=/^6(?:011|5[0-9]{2})[0-9]{3,}/;$(n).hide(),$(n).removeClass("hidden"),$(e).keyup(function(){input=$(e).val(),input=input.replace(/\s+/g,""),input=input.replace(/-+/g,""),i.test(input)||d.test(input)||o.test(input)?($(n+" #amex").hide(),$(n+" #visa").show(),$(n+" div").text("3 digit code on back of card."),$(n).fadeIn("fast")):t.test(input)?($(n+" #amex").show(),$(n+" #visa").hide(),$(n+" div").text("4 digit code on front of card."),$(n).fadeIn("fast")):$(n).hide()})},"undefined"==typeof window.interact&&(window.interact={}),window.interact.showOnFocus=function(e,n){$(n).hide(),$(n).removeClass("hidden"),$(e).focus(function(){$(n).fadeIn("fast")}),$(e).blur(function(){$(n).hide()})},"undefined"==typeof window.interact&&(window.interact={}),window.interact.smoothScroll=function(e){$(e).on("click touchend",function(e){if(e.preventDefault(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html,body").animate({scrollTop:n.offset().top-50},750),!1}})},"undefined"==typeof window.interact&&(window.interact={}),jQuery(function(){console.log("site-1488e794.js working"),window.interact.modal("modal--email-us","modal-open--email-us"),window.interact.modal("modal--change-billing-address","modal-open--change-billing-address"),window.interact.modal("modal--change-company-address","modal-open--change-company-address"),window.interact.watchMobileMenu(),window.interact.watchApplyDiscount(),window.interact.showOnFocus("#password-field","#password-helper"),window.interact.securityCodeHelper("#card-number-field","#security-code-helper"),window.interact.smoothScroll(".product-subnav a[href*=#]:not([href=#])")});