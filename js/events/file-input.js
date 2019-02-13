var Translator = require('../utils/Translator.js');

var getTextByFilesCount = function (filesCount) {
  if (filesCount === 1) {
    return files[0].name;
  }

  var translator = new Translator();

  return '';
};

var initInputFileChangeEvent = function () {
  jQuery('.custom-file-input').on('change', function () {
    var $input = jQuery(this);
    var files = $input[0].files;
    var $label = $input.next('label');

    $label.text(getTextByFilesCount(files.length));
  });
};

module.exports = initInputFileChangeEvent;
