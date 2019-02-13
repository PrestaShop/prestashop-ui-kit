var LangPluralization = require('../utils/LanguagePluralization.js');

var getTextByFiles = function ($label, files) {
  var filesCount = files.length;

  if (filesCount === 1) {
    return files[0].name;
  }

  var langPluralization = new LangPluralization();
  
  return '';
};

var initInputFileChangeEvent = function () {
  jQuery('.custom-file-input').on('change', function () {
    var $input = jQuery(this);
    var files = $input[0].files;
    var $label = $input.next('label');


    $label.text(getTextByFiles($label, files));
  });
};

module.exports = initInputFileChangeEvent;
