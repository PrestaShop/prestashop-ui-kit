const getTextByFiles = ($label, files) => {
    const filesCount = files.length;

    if (1 === filesCount) {
        return files[0].name;
    }

    //todo: pluralization
    return '';
}

export const initInputFileChangeEvent = () => {
    jQuery('.custom-file-input').on('change', function (event) {
        const $input = $(event.currentTarget);
        const files = $input[0].files;
        const $label = $input.next('label');

        $label.text(getTextByFiles($label, files));
    })
}