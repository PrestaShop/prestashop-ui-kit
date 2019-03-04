import Pluralizer from '../utils/pluralizer.js';

/**
 * When there's only one file it displays name. However if there are more files it displays the text, which is retrieved
 * by pluralisation rules according to file count.
 *
 * @param {object} files
 * @param {string} multipleFilesPluralisedMessage - message can be separated by pipelines
 * @param {string} locale - ISO 639-1 format locale
 * @returns {string}
 * @private
 */
var getTextByFilesCount = function (files, multipleFilesPluralisedMessage, locale) {
  var filesCount = files.length;
  if (filesCount === 1) {
    return files[0].name;
  }

  var pluralizer = new Pluralizer();

  return pluralizer.transChoice(
    multipleFilesPluralisedMessage,
    filesCount,
    {
      count: filesCount,
    },
    locale,
  );
};

/**
 * Event listener for file import event - can be executed within selecting the files or
 * just by drag and drop action applied.
 */
var initInputFile = function () {
  jQuery('.custom-file-input').on('change', function () {
    var $input = jQuery(this);
    var files = $input[0].files;
    var $label = $input.next('label');

    $label.text(
      getTextByFilesCount(files, $input.data('multipleFilesText'), $input.attr('data-locale'))
    );
  });
};

export default initInputFile;
