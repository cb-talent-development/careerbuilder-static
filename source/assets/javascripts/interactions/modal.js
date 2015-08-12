/*
* @Author: Manske
* @Date:   2015-08-12 11:23:12
* @Last Modified by:   Manske
* @Last Modified time: 2015-08-12 11:33:35
*/

'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

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