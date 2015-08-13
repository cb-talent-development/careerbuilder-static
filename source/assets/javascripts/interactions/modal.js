'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.modal = function(modalName, openLink) {

  var openLinks  = $('.' + openLink);
  var closeLinks = $('.close-modal');
  var modalBack  = $('#modal-background');
  var modalForm  = $('#' + modalName);

  // modals start with '.hidden' in HTML to prevent load order race between HTML/JS
  modalForm.hide();
  modalBack.hide();
  modalForm.removeClass('hidden');
  modalBack.removeClass('hidden');

  // binding to all close links; click on one modal hides all modals
  closeLinks.click(function() {
    modalForm.hide();
    modalBack.hide();
  });

  openLinks.click(function() {
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
      console.log("ERROR: link asked for a modal named #" + modalName + " but it wasn't found on the page.");
    };
  });
};