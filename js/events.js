export const initInputFileChangeEvent = () => {
    jQuery('.custom-file-input').on('change', function (event) {
        const $input = $(event.currentTarget);
        const files = $input[0].files;
        const filesCount = files.length;
        const $label = $input.next('label');

        if (1 === filesCount) {
            $label.text(files[0].name);
        } else if (1 < filesCount) {
            const multipleFilesTranslationText = $input.attr('data-multiple-files-text');

            if (typeof multipleFilesTranslationText !== 'undefined') {
                $label.text(filesCount + ' ' + multipleFilesTranslationText);
            } else {
                $label.text(filesCount + ' files');
            }
        }
    })
}