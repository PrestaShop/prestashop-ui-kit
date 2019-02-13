import LanguagePluralization from '../utils/LanguagePluralization';

const getTextByFiles = ($label, files) => {
  const filesCount = files.length;

  if (filesCount === 1) {
    return files[0].name;
  }

  const languagePluralization = new LanguagePluralization('lt');

  languagePluralization.getPluralizedMessage(
    '{1} failas | {3} failai | {10} failų | {0} nėra failų',
    11,
  );


  // todo: pluralization
  return '';
};

export const initInputFileChangeEvent = () => {
  jQuery('.custom-file-input').on('change', (event) => {
    const $input = $(event.currentTarget);
    const files = $input[0].files;
    const $label = $input.next('label');

    $label.text(getTextByFiles($label, files));
  });
};
